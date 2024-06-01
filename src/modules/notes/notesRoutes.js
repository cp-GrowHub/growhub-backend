const { verifyToken } = require('../../utils/auth');

const placeholder = () => {};

const routes = [
  {
    method: 'GET', // getNotesByUser
    path: '/notes',
    handler: placeholder,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'POST', // createNote
    path: '/notes',
    handler: placeholder,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'GET', // getDetailNote
    path: '/notes/{noteId}',
    handler: placeholder,
  },
  {
    method: 'PUT', // editNote
    path: '/notes/{noteId}/edit',
    handler: placeholder,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'DELETE',
    path: '/notes/{noteId}',
    handler: placeholder,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
];

module.exports = routes;
