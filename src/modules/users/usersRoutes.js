const {
  registerUser,
  loginUser,
  getAllUsers,
  getOwnProfile,
  updateOwnProfile,
} = require('./usersHandler');
const { verifyToken } = require('../../utils/auth');

const routes = [
  {
    method: 'POST',
    path: '/register',
    handler: registerUser,
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginUser,
  },
  {
    method: 'GET',
    path: '/users',
    handler: getAllUsers,
  },
  {
    method: 'GET',
    path: '/users/me',
    handler: getOwnProfile,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'PUT',
    path: '/users/me/edit',
    handler: updateOwnProfile,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
];

module.exports = routes;
