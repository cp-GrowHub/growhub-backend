const { nanoid } = require('nanoid');
const blogs = require('./blogsModel');

// TODO: createBlog
const createBlog = (request, h) => {
  const userId = request.auth.credentials.id;
  const { title, body, tags = [] } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();

  if (!title || !body) {
    const response = h.response({
      status: 'fail',
      message: 'Title and body cannot be empty',
    });

    response.code(400);
    return response;
  }

  const newBlog = {
    id,
    title,
    body,
    tags,
    createdAt,
    ownerId: userId,
  };

  blogs.push(newBlog);

  const response = h.response({
    status: 'success',
    message: 'Blog created successfully',
    data: {
      blog: newBlog,
    },
  });

  response.code(201);
  return response;
};

// TODO: getAllBlogs
const getAllBlogs = (request, h) => {
  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      blogs,
    },
  });

  response.code(200);
  return response;
};

// TODO: getDetailBlog
const getDetailBlog = (request, h) => {
  const { blogId } = request.params;
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    const response = h.response({
      status: 'fail',
      message: 'Blog not found',
    });

    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      blog,
    },
  });

  response.code(200);
  return response;
};

// TODO: editBlog
const editBlog = (request, h) => {
  const userId = request.auth.credentials.id;
  const { blogId } = request.params;
  const { title, body, tags } = request.payload;

  const blog = blogs.find((b) => b.id === blogId && b.ownerId === userId);
  if (!blog) {
    const response = h.response({
      status: 'fail',
      message: 'Blog not found or unauthorized',
    });

    response.code(404);
    return response;
  }

  if (title !== undefined) blog.title = title;
  if (body !== undefined) blog.body = body;
  if (tags !== undefined) blog.tags = tags;

  const response = h.response({
    status: 'success',
    message: 'Blog updated successfully',
    data: { blog },
  });

  response.code(200);
  return response;
};

// TODO: deleteBlog
const deleteBlog = (request, h) => {
  const userId = request.auth.credentials.id;
  const { blogId } = request.params;

  const index = blogs.findIndex((b) => b.id === blogId && b.ownerId === userId);
  if (index === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Blog not found or unauthorized',
    });

    response.code(404);
    return response;
  }

  blogs.splice(index, 1);

  const response = h.response({
    status: 'success',
    message: 'Blog deleted successfully',
  });

  response.code(200);
  return response;
};

module.exports = {
  createBlog,
  getAllBlogs,
  getDetailBlog,
  editBlog,
  deleteBlog,
};
