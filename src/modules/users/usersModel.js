const bcrypt = require('bcrypt');

const users = [
  {
    id: 'users-1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: bcrypt.hashSync('password123', 10),
    bio: 'Hello, I am John Doe!',
    avatar: 'https://ui-avatars.com/api/?name=John&background=random',
  },
  {
    id: 'users-2',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    password: bcrypt.hashSync('password123', 10),
    bio: 'Hello, I am Jane Doe!',
    avatar: 'https://ui-avatars.com/api/?name=Jane&background=random',
  },
  {
    id: 'users-3',
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    password: bcrypt.hashSync('password123', 10),
    bio: 'Hello, I am Alice Smith!',
    avatar: 'https://ui-avatars.com/api/?name=Alice&background=random',
  },
  {
    id: 'users-4',
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    password: bcrypt.hashSync('password123', 10),
    bio: 'Hello, I am Bob Johnson!',
    avatar: 'https://ui-avatars.com/api/?name=Bob&background=random',
  },
  {
    id: 'users-5',
    firstName: 'Charlie',
    lastName: 'Brown',
    email: 'charlie.brown@example.com',
    password: bcrypt.hashSync('password123', 10),
    bio: 'Hello, I am Charlie Brown!',
    avatar: 'https://ui-avatars.com/api/?name=Charlie&background=random',
  },
];

module.exports = users;
