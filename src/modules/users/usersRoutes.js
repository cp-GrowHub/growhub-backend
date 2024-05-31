const a = () => {};

const routes = [
  {
    method: 'POST',
    path: '/register',
    handler: a,
  },
  {
    method: 'GET',
    path: '/login',
    handler: a,
  },
  {
    method: 'GET',
    path: '/users',
    handler: a,
  },
  {
    method: 'GET',
    path: '/users/me',
    handler: a,
  },
  {
    method: 'PUT',
    path: '/users/me/edit',
    handler: a,
  },
];

module.exports = routes;
