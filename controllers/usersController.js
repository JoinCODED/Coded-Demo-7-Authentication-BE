let users = require('../users');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
  try {
    req.body.id = users[users.length - 1].id + 1;
    users.push(req.body);
    const newUser = req.body;
    const token = generateToken(newUser);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  const token = generateToken(req.user);
  res.json({ token });
};
const generateToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
    exp: Date.now() + 43200, // the token will expire after 2 hours
  };
  const token = jwt.sign(payload, 'JWT_SECRET');
  return token;
};
