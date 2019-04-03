const express = require('express');
const db = require('../data/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { department } = req.token;
    const users = await db.users.getAllBy({ department });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Cannot get users.' });
  }
});

module.exports = router;
