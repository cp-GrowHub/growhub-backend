const { nanoid } = require('nanoid');
const todos = require('./todosModel');

// TODO: createTodo
const createTodo = (request, h) => {
  const userId = request.auth.credentials.id;
  const { name, highPriority = false, priority = false } = request.payload;
  const finished = false;
  const id = nanoid(16);

  // memastikan bahwa salah satu saja yang true
  if (highPriority && priority) {
    const response = h.response({
      status: 'fail',
      message: 'Only one of highPriority or priority can be true',
    });

    response.code(400);
    return response;
  }

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
const updateTodo = (request, h) => {
  const userId = request.auth.credentials.id;
  const { todoId } = request.params;
  const { highPriority, priority, finished } = request.payload;

  const todo = todos.find((t) => t.id === todoId && t.ownerId === userId);
  if (!todo) {
    const response = h.response({
      status: 'fail',
      message: 'Todo not found or unathourized',
    });

    response.code(404);
    return response;
  }

  // mengecek apakah keduanya di input true
  if (highPriority && priority) {
    const response = h.response({
      status: 'fail',
      message: 'Only one of highPriority or priority can be true',
    });

    response.code(400);
    return response;
  }

  if (highPriority !== undefined) todo.highPriority = highPriority;
  if (priority !== undefined) todo.priority = priority;
  if (finished !== undefined) todo.finished = finished;

  const response = h.response({
    status: 'success',
    message: 'Todo updated successfully',
    data: { todo },
  });

  response.code(200);
  return response;
};

// TODO: deleteTodo
const deleteTodo = (request, h) => {
  const userId = request.auth.credentials.id;
  const { todoId } = request.params;

  const index = todos.findIndex((t) => t.id === todoId && t.ownerId === userId);
  if (index === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Todo not found or unathorized',
    });

    response.code(404);
    return response;
  }

  // menghapus todos
  todos.splice(index, 1);

  const response = h.response({
    status: 'success',
    message: 'Todo deleted successfully',
  });

  response.code(200);
  return response;
};

module.exports = {
  createTodo,
  getTodosByUser,
  updateTodo,
  deleteTodo,
};
