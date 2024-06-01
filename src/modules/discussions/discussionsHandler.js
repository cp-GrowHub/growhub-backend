const { nanoid } = require('nanoid');
const discussions = require('./discussionsModel');

// TODO: getDiscussions
const getDiscussions = (request, h) => {
  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      discussions,
    },
  });

  response.code(200);
  return response;
};

// TODO: createDiscussion
const createDiscussion = (request, h) => {
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

  const newDiscussion = {
    id,
    title,
    body,
    tags,
    createdAt,
    ownerId: userId,
    upVotes: [],
    downVotes: [],
    comments: [],
  };

  discussions.push(newDiscussion);

  const response = h.response({
    status: 'success',
    message: 'Discussion created successfully',
    data: {
      discussions: newDiscussion,
    },
  });

  response.code(201);
  return response;
};

// TODO: getDetailDiscussion
const getDetailDiscussion = (request, h) => {
  const { discussionId } = request.params;
  const discussion = discussions.find((d) => d.id === discussionId);

  if (!discussion) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found',
    });

    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      discussion,
    },
  });

  response.code(200);
  return response;
};

// TODO: addComment
const addComment = (request, h) => {
  const userId = request.auth.credentials.id;
  const { discussionId } = request.params;
  const { content } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();

  const discussion = discussions.find((d) => d.id === discussionId);
  if (!discussion) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found',
    });

    response.code(404);
    return response;
  }

  if (!content) {
    const response = h.response({
      status: 'fail',
      message: 'Content cannot be empty',
    });

    response.code(400);
    return response;
  }

  const newComment = {
    id,
    content,
    createdAt,
    ownerId: userId,
    upVotes: [],
    downVotes: [],
  };

  discussion.comments.push(newComment);

  const response = h.response({
    status: 'success',
    message: 'Comment added successfully',
    data: {
      comment: newComment,
    },
  });

  response.code(201);
  return response;
};

// TODO: deleteDiscussion
const deleteDiscussion = (request, h) => {
  const userId = request.auth.credentials.id;
  const { discussionId } = request.params;

  const index = discussions.findIndex(
    (d) => d.id === discussionId && d.ownerId === userId,
  );
  if (index === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found or unauthorized',
    });

    response.code(404);
    return response;
  }

  discussions.splice(index, 1);

  const response = h.response({
    status: 'success',
    message: 'Discussion deleted successfully',
  });

  response.code(200);
  return response;
};

// TODO: deleteComment
const deleteComment = (request, h) => {
  const { discussionId, commentId } = request.params;

  const discussion = discussions.find((d) => d.id === discussionId);
  if (!discussion) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found',
    });

    response.code(404);
    return response;
  }

  const commentIndex = discussion.comments.findIndex((c) => c.id === commentId);
  if (commentIndex === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Comment not found or unauthorized',
    });

    response.code(404);
    return response;
  }

  discussion.comments.splice(commentIndex, 1);

  const response = h.response({
    status: 'success',
    message: 'Comment deleted successfully',
  });

  response.code(200);
  return response;
};

// TODO: upvoteDiscussion
const upvoteDiscussion = (request, h) => {
  const userId = request.auth.credentials.id;
  const { discussionId } = request.params;

  const discussion = discussions.find((d) => d.id === discussionId);
  if (!discussion) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found',
    });

    response.code(404);
    return response;
  }

  // jika belum melakukan upvote
  if (!discussion.upVotes.includes(userId)) {
    discussion.upVotes.push(userId);
    // memastikan tidak ada di downvote
    discussion.downVotes = discussion.downVotes.filter((id) => id !== userId);
  }

  const response = h.response({
    status: 'success',
    message: 'Discussion upvoted successfully',
  });

  response.code(200);
  return response;
};

// TODO: downvoteDiscussion
const downvoteDiscussion = (request, h) => {
  const userId = request.auth.credentials.id;
  const { discussionId } = request.params;

  const discussion = discussions.find((d) => d.id === discussionId);
  if (!discussion) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found',
    });

    response.code(404);
    return response;
  }

  if (!discussion.downVotes.includes(userId)) {
    discussion.downVotes.push(userId);
    discussion.upVotes = discussion.upVotes.filter((id) => id !== userId);
  }

  const response = h.response({
    status: 'success',
    message: 'Discussion downvoted succesfully',
  });

  response.code(200);
  return response;
};

// TODO: neutralizeDiscussionVote
const neutralizeDiscussionVote = (request, h) => {
  const userId = request.auth.credentials.id;
  const { discussionId } = request.params;

  const discussion = discussions.find((d) => d.id === discussionId);
  if (!discussion) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found',
    });

    response.code(404);
    return response;
  }

  discussion.upVotes = discussion.upVotes.filter((id) => id !== userId);
  discussion.downVotes = discussion.downVotes.filter((id) => id !== userId);

  const response = h.response({
    status: 'success',
    message: 'Discussion vote neutralized successfully',
  });

  response.code(200);
  return response;
};

// TODO: upvoteComment
const upvoteComment = (request, h) => {
  const userId = request.auth.credentials.id;
  const { discussionId, commentId } = request.params;

  const discussion = discussions.find((d) => d.id === discussionId);
  if (!discussion) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found',
    });

    response.code(404);
    return response;
  }

  const comment = discussion.comments.find((c) => c.id === commentId);
  if (!comment) {
    const response = h.response({
      status: 'fail',
      message: 'Comment not found',
    });

    response.code(404);
  }

  if (!comment.upVotes.includes(userId)) {
    comment.upVotes.push(userId);
    comment.downVotes = comment.downVotes.filter((id) => id !== userId);
  }

  const response = h.response({
    status: 'success',
    message: 'Comment upvoted successfully',
  });

  response.code(200);
  return response;
};

// TODO: downvoteComment
const downvoteComment = (request, h) => {
  const userId = request.auth.credentials.id;
  const { discussionId, commentId } = request.params;

  const discussion = discussions.find((d) => d.id === discussionId);
  if (!discussion) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found',
    });

    response.code(404);
    return response;
  }

  const comment = discussion.comments.find((c) => c.id === commentId);
  if (!comment) {
    const response = h.response({
      status: 'fail',
      message: 'Comment not found',
    });

    response.code(404);
  }

  if (!comment.downVotes.includes(userId)) {
    comment.downVotes.push(userId);
    comment.upVotes = comment.upVotes.filter((id) => id !== userId);
  }

  const response = h.response({
    status: 'success',
    message: 'Comment downvoted successfully',
  });

  response.code(200);
  return response;
};

// TODO: neutralizeCommentVote
const neutralizeCommentVote = (request, h) => {
  const userId = request.auth.credentials.id;
  const { discussionId, commentId } = request.params;

  const discussion = discussions.find((d) => d.id === discussionId);
  if (!discussion) {
    const response = h.response({
      status: 'fail',
      message: 'Discussion not found',
    });

    response.code(404);
    return response;
  }

  const comment = discussion.comments.find((c) => c.id === commentId);
  if (!comment) {
    const response = h.response({
      status: 'fail',
      message: 'Comment not found',
    });

    response.code(404);
    return response;
  }

  comment.upVotes = comment.upVotes.filter((id) => id !== userId);
  comment.downVotes = comment.downVotes.filter((id) => id !== userId);

  const response = h.response({
    status: 'success',
    message: 'Comment vote neutralized successfully',
  });

  response.code(200);
  return response;
};

module.exports = {
  getDiscussions,
  createDiscussion,
  getDetailDiscussion,
  addComment,
  deleteDiscussion,
  deleteComment,
  upvoteDiscussion,
  downvoteDiscussion,
  neutralizeDiscussionVote,
  upvoteComment,
  downvoteComment,
  neutralizeCommentVote,
};
