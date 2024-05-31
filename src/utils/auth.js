const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

const verifyToken = (request, h) => {
  const authorization = request.headers.authorization;

  if (!authorization) {
    return h.response({ message: 'Authorization header is missing' }).code(401).takeover();
  }

  const token = authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secretKey);
    request.auth = { credentials: decoded };
    return h.continue;
  } catch (err) {
    return h.response({ message: 'Invalid token' }).code(401).takeover();
  }
};

module.exports = { verifyToken };
