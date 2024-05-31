const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

// Middleware untuk memverifikasi token JWT
const verifyToken = (request, h) => {
  // Mendapatkan header Authorization dari request
  const authorization = request.headers.authorization;

  // Jika header Authorization tidak ada, kirim respons dengan kode 401 dan pesan kesalahan
  if (!authorization) {
    return h.response({ message: 'Authorization header is missing' }).code(401).takeover();
  }

  // Memisahkan kata 'Bearer' dan token yang sebenarnya dari header Authorization
  const token = authorization.split(' ')[1];

  try {
    // Memverifikasi token menggunakan secretKey
    const decoded = jwt.verify(token, secretKey);
    // Menyimpan data yang didekodekan ke dalam request.auth.credentials
    request.auth = { credentials: decoded };
    // Lanjutkan ke handler berikutnya
    return h.continue;
  } catch (err) {
    // Jika token tidak valid, kirim respons dengan kode 401 dan pesan kesalahan
    return h.response({ message: 'Invalid token' }).code(401).takeover();
  }
};

module.exports = { verifyToken };
