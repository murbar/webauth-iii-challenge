const express = require('express');
const db = require('../data/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await db.users.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Cannot get users.' });
  }
});

module.exports = router;
