const { verifyToken } = require('../../utils/auth');

const {
  getNotesByUser,
  createNote,
  getDetailNote,
  editNote,
  deleteNote,
} = require('./notesHandler');

const routes = [
  {
    method: 'GET', // getNotesByUser
    path: '/notes',
    handler: getNotesByUser,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'POST', // createNote
    path: '/notes',
    handler: createNote,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'GET', // getDetailNote
    path: '/notes/{noteId}',
    handler: getDetailNote,
  },
  {
    method: 'PUT', // editNote
    path: '/notes/{noteId}/edit',
    handler: editNote,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'DELETE', // deleteNote
    path: '/notes/{noteId}',
    handler: deleteNote,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
];

module.exports = routes;
