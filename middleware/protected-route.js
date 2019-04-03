const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, jwtSecret);
    req.decodedJwt = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid Credentials.' });
  }
};
