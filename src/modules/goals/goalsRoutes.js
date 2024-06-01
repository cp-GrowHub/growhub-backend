const placeholder = () => {};
const { verifyToken } = require('../../utils/auth');

const routes = [
  {
    method: 'GET',
    path: '/goals',
    handler: placeholder, // getGoalsByUser
    option: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'POST',
    path: '/goals',
    handler: placeholder, // createGoal
    option: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: '',
    path: '/',
    handler: placeholder, // updateGoal
    option: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: '',
    path: '/',
    handler: placeholder, // deleteGoal
    option: {
      pre: [{ method: verifyToken }],
    },
  },
];

module.exports = routes;
