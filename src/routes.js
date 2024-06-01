const usersRoutes = require('./modules/users/usersRoutes');
const todosRoutes = require('./modules/todos/todosRoutes');
const goalsRoutes = require('./modules/goals/goalsRoutes');
const notesRoutes = require('./modules/notes/notesRoutes');
const discussionsRoutes = require('./modules/discussions/discussionsRoutes');
const blogsRoutes = require('./modules/blogs/blogsRoutes');

const routes = [
  ...usersRoutes,
  ...todosRoutes,
  ...goalsRoutes,
  ...notesRoutes,
  ...discussionsRoutes,
  ...blogsRoutes,
];

module.exports = routes;
