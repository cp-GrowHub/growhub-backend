const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');
const serverInstance = require('../serverInstance');

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
    instanceId: serverInstance.id, // Tambahkan instance ID ke token
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 jam kedepan
  };

  return jwt.sign(payload, secretKey, { algorithm: 'HS256' });
};

module.exports = generateToken;
