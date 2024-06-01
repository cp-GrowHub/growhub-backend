const {
  createGoal,
  getGoalsByUser,
  updateGoal,
  deleteGoal,
} = require('./goalsHandler');

const { verifyToken } = require('../../utils/auth');

const routes = [
  {
    method: 'GET',
    path: '/goals',
    handler: getGoalsByUser,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'POST',
    path: '/goals',
    handler: createGoal,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'PUT',
    path: '/goals/{goalId}',
    handler: updateGoal,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'DELETE',
    path: '/goals/{goalId}',
    handler: deleteGoal,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
];

module.exports = routes;
