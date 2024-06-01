const {
  getTodosByUser,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('./todosHandler');
const { verifyToken } = require('../../utils/auth');

const routes = [
  {
    method: 'GET',
    path: '/todos',
    handler: getTodosByUser,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'POST',
    path: '/todos',
    handler: createTodo,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'PUT',
    path: '/todos/{todoId}',
    handler: updateTodo,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'DELETE',
    path: '/todos/{todoId}',
    handler: deleteTodo,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
];

module.exports = routes;
