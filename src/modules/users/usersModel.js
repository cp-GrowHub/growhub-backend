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
  // Tambahkan pengguna lain sesuai kebutuhan
];

module.exports = users;
