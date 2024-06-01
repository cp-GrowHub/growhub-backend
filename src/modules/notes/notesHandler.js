const { nanoid } = require('nanoid');
const notes = require('./notesModel');

// TODO: getNotesByUser
const getNotesByUser = (request, h) => {
  const userId = request.auth.credentials.id;
  const userNotes = notes.filter((note) => note.ownerId === userId);

  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      notes: userNotes,
    },
  });

  response.code(200);
  return response;
};

// TODO: createNote
const createNote = (request, h) => {
  const userId = request.auth.credentials.id;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const { title, body, archived = false } = request.payload;

  if (!title || !body) {
    const response = h.response({
      status: 'success',
      message: 'Title and body cannot be empty',
    });

    response.code(400);
    return response;
  }

  const newNote = {
    id,
    title,
    body,
    archived,
    createdAt,
    ownerId: userId,
  };

  notes.push(newNote);

  const response = h.response({
    status: 'success',
    message: 'Note created successfully',
    data: {
      note: newNote,
    },
  });

  response.code(201);
  return response;
};

// TODO: getDetailNote
const getDetailNote = (request, h) => {
  const { noteId } = request.params;
  const note = notes.find((n) => n.id === noteId);

  if (!note) {
    const response = h.response({
      status: 'fail',
      message: 'Note not found',
    });

    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      note,
    },
  });

  response.code(200);
  return response;
};

// TODO: editNote
const editNote = (request, h) => {
  const userId = request.auth.credentials.id;
  const { noteId } = request.params;
  const { title, body, archived } = request.payload;

  const note = notes.find((n) => n.id === noteId && n.ownerId === userId);
  if (!note) {
    const response = h.response({
      status: 'fail',
      message: 'Note not found or unauthorized',
    });

    response.code(404);
    return response;
  }

  if (title !== undefined) note.title = title;
  if (body !== undefined) note.body = body;
  if (archived !== undefined) note.archived = archived;

  const response = h.response({
    status: 'success',
    message: 'Note updated successfully',
    data: {
      note,
    },
  });

  response.code(200);
  return response;
};

// TODO: deleteNote
const deleteNote = (request, h) => {
  const userId = request.auth.credentials.id;
  const { noteId } = request.params;

  const index = notes.findIndex((n) => n.id === noteId && n.ownerId === userId);
  if (index === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Note not found or unauthorized',
    });

    response.code(404);
    return response;
  }

  notes.splice(index, 1);

  const response = h.response({
    status: 'success',
    message: 'Note deleted successfully',
  });

  response.code(200);
  return response;
};

module.exports = {
  getNotesByUser,
  createNote,
  getDetailNote,
  editNote,
  deleteNote,
};
