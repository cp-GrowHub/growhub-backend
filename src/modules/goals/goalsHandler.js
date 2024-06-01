const { nanoid } = require('nanoid');
const goals = require('./goalsModel');

// TODO: createGoal
const createGoal = (request, h) => {
  const userId = request.auth.credentials.id;
  const id = nanoid(16);
  const finished = false;
  const { name, deadline } = request.payload;

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Name cannot be empty',
    });

    response.code(400);
    return response;
  }

  const formattedDeadline = new Date(deadline).toISOString();
  if (Number.isNaN(Date.parse(formattedDeadline))) {
    const response = h.response({
      status: 'fail',
      message: 'Invalid deadline date',
    });

    response.code(400);
    return response;
  }

  const newGoal = {
    id,
    name,
    deadline: formattedDeadline,
    finished,
    ownerId: userId,
  };

  goals.push(newGoal);

  const response = h.response({
    status: 'success',
    message: 'Goal created successfully',
    data: {
      goal: newGoal,
    },
  });

  response.code(201);
  return response;
};

// TODO: getGoalsByUser
const getGoalsByUser = (request, h) => {
  const userId = request.auth.credentials.id;
  const userGoals = goals.filter((goal) => goal.ownerId === userId);
  const response = h.response({
    status: 'success',
    message: 'ok',
    data: {
      goals: userGoals,
    },
  });

  response.code(200);
  return response;
};

// TODO: updateGoal
const updateGoal = (request, h) => {
  const userId = request.auth.credentials.id;
  const { goalId } = request.params;
  const { finished } = request.payload;

  if (finished === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Finished status not provided',
    });

    response.code(400);
    return response;
  }

  const goal = goals.find((g) => g.id === goalId && g.ownerId === userId);
  if (!goal) {
    const response = h.response({
      status: 'fail',
      message: 'Goal not found or unathourized',
    });

    response.code(404);
    return response;
  }

  goal.finished = finished;

  const response = h.response({
    status: 'success',
    message: 'Goal updated successfully',
  });

  response.code(200);
  return response;
};

// TODO: deleteGoal
const deleteGoal = (request, h) => {
  const userId = request.auth.credentials.id;
  const { goalId } = request.params;

  const index = goals.findIndex((g) => g.id === goalId && g.ownerId === userId);
  if (index === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Goal not found or unauthorized',
    });

    response.code(404);
    return response;
  }

  goals.splice(index, 1);

  const response = h.response({
    status: 'success',
    message: 'Goal deleted successfully',
  });

  response.code(200);
  return response;
};

module.exports = {
  createGoal,
  getGoalsByUser,
  updateGoal,
  deleteGoal,
};
