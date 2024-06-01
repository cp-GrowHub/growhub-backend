const usersRoutes = require('./modules/users/usersRoutes');
const todosRoutes = require('./modules/todos/todosRoutes');
const goalsRoutes = require('./modules/goals/goalsRoutes');
const notesRoutes = require('./modules/notes/notesRoutes');

const routes = [...usersRoutes, ...todosRoutes, ...goalsRoutes, ...notesRoutes];

module.exports = routes;
