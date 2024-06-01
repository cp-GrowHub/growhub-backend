const usersRoutes = require('./modules/users/usersRoutes');
const todosRoutes = require('./modules/todos/todosRoutes');
const goalsRoutes = require('./modules/goals/goalsRoutes');

const routes = [...usersRoutes, ...todosRoutes, ...goalsRoutes];

module.exports = routes;
