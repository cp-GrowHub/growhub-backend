const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const users = require('./usersModel');
const generateToken = require('../../utils/generateToken');

// TODO: registerUser
const registerUser = async (request, h) => {
  const { firstName, lastName, email, password } = request.payload;

  // check email
  const isExist = users.find((user) => user.email === email);
  if (isExist) {
    const response = h.response({
      status: 'fail',
      message: 'Email sudah digunakan',
    });

    response.code(400);
    return response;
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = nanoid(16);
  const bio = 'This user has not added bio yet.';
  const alias = `${firstName.charAt(0)}${lastName.charAt(0)}`;
  const avatar = `https://ui-avatars.com/api/?name=${alias}&background=random`;

  const newUser = {
    id,
    firstName,
    lastName,
    email,
    password: hashedPassword,
    bio,
    avatar,
  };

  users.push(newUser);

  const response = h.response({
    status: 'success',
    message: 'User created',
    data: {
      userId: newUser.id,
    },
  });

  response.code(201);
  return response;
};

// TODO: loginUser
const loginUser = async (request, h) => {
  const { email, password } = request.payload;

  // find user
  const user = users.find((u) => u.email === email);
  if (!user) {
    const response = h.response({
      status: 'fail',
      message: 'Invalid email',
    });

    response.code(404);
    return response;
  }

  // check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const response = h.response({
      status: 'fail',
      message: 'Invalid Password',
    });

    response.code(404);
    return response;
  }

  // generate JWT
  const token = generateToken(user);

  const response = h.response({
    status: 'success',
    message: 'Login successful',
    data: {
      token,
    },
  });

  response.code(200);
  return response;
};

// TODO: getAllUsers
const getAllUsers = (request, h) => {
  const userList = users.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    bio: user.bio,
    avatar: user.avatar,
  }));

  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      users: userList,
    },
  });

  response.code(200);
  return response;
};

// TODO: getOwnProfile
const getOwnProfile = (request, h) => {
  const userId = request.auth.credentials.id; // get id from token
  const user = users.find((u) => u.id === userId);

  if (!user) {
    const response = h.response({
      status: 'fail',
      message: 'User not found',
    });

    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      user: {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        bio: user.bio,
        avatar: user.avatar,
      },
    },
  });

  response.code(200);
  return response;
};

// TODO: updateOwnProfile
const updateOwnProfile = (request, h) => {
  const userId = request.auth.credentials.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    const response = h.response({
      status: 'fail',
      message: 'User not found',
    });

    response.code(404);
    return response;
  }

  const { firstName, lastName, bio, email } = request.payload;

  // update dan memastikan nilai yang diberi
  if (firstName !== undefined) {
    user.firstName = firstName;
  }

  if (lastName !== undefined) {
    user.lastName = lastName;
  }

  if (bio !== undefined) {
    user.bio = bio;
  }

  if (email !== undefined) {
    // check email
    const existingUser = users.find(
      (u) => u.email === email && u.id !== userId,
    );

    if (existingUser) {
      const response = h.response({
        status: 'fail',
        message: 'Email already exist',
      });

      response.code(400);
      return response;
    }

    user.email = email;
  }

  const response = h.response({
    status: 'success',
    message: 'Profile updated successfully',
    data: {
      user: {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        bio: user.bio,
        email: user.email,
        avatar: user.avatar,
      },
    },
  });

  response.code(200);
  return response;
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getOwnProfile,
  updateOwnProfile,
};
