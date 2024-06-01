const usersRoutes = require('./modules/users/usersRoutes');
const todosRoutes = require('./modules/todos/todosRoutes');

const routes = [...usersRoutes, ...todosRoutes];

module.exports = routes;
