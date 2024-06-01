const { nanoid } = require('nanoid');
const todos = require('./todosModel');

// TODO: createTodo
const createTodo = (request, h) => {
  const userId = request.auth.credentials.id;
  const { name, highPriority = false, priority = false } = request.payload;
  const finished = false;
  const id = nanoid(16);

  const newTodo = {
    id,
    name,
    highPriority,
    priority,
    finished,
    ownerId: userId,
  };

  todos.push(newTodo);

  const response = h.response({
    status: 'success',
    message: 'Todo created successfully',
    data: {
      todo: newTodo,
    },
  });

  response.code(201);
  return response;
};

// TODO: getTodosByUser
const getTodosByUser = (request, h) => {
  const userId = request.auth.credentials.id;
  const userTodos = todos.filter((todo) => todo.ownerId === userId);
  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      todos: userTodos,
    },
  });

  response.code(200);
  return response;
};

// TODO: updateTodo
// TODO: deleteTodo

module.exports = {
  createTodo,
};
