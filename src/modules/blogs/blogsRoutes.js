const {
  createBlog,
  getAllBlogs,
  getDetailBlog,
  editBlog,
  deleteBlog,
} = require('./blogsHandler');
const { verifyToken } = require('../../utils/auth');

const routes = [
  {
    method: 'POST',
    path: '/blogs/add',
    handler: createBlog,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'GET',
    path: '/blogs',
    handler: getAllBlogs,
  },
  {
    method: 'GET',
    path: '/blogs/{blogId}',
    handler: getDetailBlog,
  },
  {
    method: 'PUT',
    path: '/blogs/{blogId}/edit',
    handler: editBlog,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'DELETE',
    path: '/blogs/{blogId}/delete',
    handler: deleteBlog,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
];

module.exports = routes;
