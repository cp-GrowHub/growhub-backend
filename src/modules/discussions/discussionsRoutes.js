const {
  getDiscussions,
  createDiscussion,
  getDetailDiscussion,
  addComment,
  deleteDiscussion,
  deleteComment,
  upvoteDiscussion,
  downvoteDiscussion,
  upvoteComment,
  downvoteComment,
} = require('./discussionsHandler');
const { verifyToken } = require('../../utils/auth');

const routes = [
  {
    method: 'GET',
    path: '/discussions',
    handler: getDiscussions,
  },
  {
    method: 'POST',
    path: '/discussions',
    handler: createDiscussion,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'GET',
    path: '/discussions/{discussionId}',
    handler: getDetailDiscussion,
  },
  {
    method: 'POST',
    path: '/discussions/{discussionId}/comments',
    handler: addComment,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'DELETE',
    path: '/discussions/{discussionId}',
    handler: deleteDiscussion,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'DELETE',
    path: '/discussions/{discussionId}/comments/{commentId}',
    handler: deleteComment,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'POST',
    path: '/discussions/{discussionId}/upvote',
    handler: upvoteDiscussion,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'POST',
    path: '/discussions/{discussionId}/downvote',
    handler: downvoteDiscussion,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'POST',
    path: '/discussions/{discussionId}/comments/{commentId}/upvote',
    handler: upvoteComment,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
  {
    method: 'POST',
    path: '/discussions/{discussionId}/comments/{commentId}/downvote',
    handler: downvoteComment,
    options: {
      pre: [{ method: verifyToken }],
    },
  },
];

module.exports = routes;
