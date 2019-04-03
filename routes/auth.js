const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../data/db');
const { userValidator } = require('../data/validators');
const { jwtSecret } = require('../config');

const router = express.Router();

const generateToken = user => {
  const { id, username, department } = user;
  const payload = {
    subject: id,
    username,
    department
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, jwtSecret, options);
};

router.post('/register', async (req, res) => {
  try {
    let user = req.body;
    const { error } = userValidator(user);
    if (error) {
      res.status(400).json({
        error: error.details[0].message
      });
    } else {
      const hash = bcrypt.hashSync(user.password, 10); // 12 in production
      user.password = hash;
      const newUser = await db.users.create(user);
      const token = generateToken(newUser);
      res.status(201).json({
        message: 'User created!',
        token
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Cannot create user.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = username ? await db.users.getBy({ username }) : null;
    const credentialsValid =
      user && password ? await bcrypt.compare(password, user.password) : false;
    if (!user || !credentialsValid) {
      res.status(401).json({ error: 'Invalid Credentials.' });
    } else {
      const token = generateToken(user);
      res.status(200).json({ message: `Welcome, ${user.username}.`, token });
    }
  } catch (error) {
    // console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
