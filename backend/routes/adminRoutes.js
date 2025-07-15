const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddlewares');
const User = require('../models/user');
const Hackathon = require('../models/Hackathon'); // ✅ ADD this line
const { createHackathon } = require('../controllers/adminControllers');

// GET all users (Admin only)
router.get('/users', authenticateToken, async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
});

// ✅ ADD this route
router.get('/all-hackathons', async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.status(200).json(hackathons);
  } catch (error) {
    console.error('❌ Error fetching hackathons:', error);
    res.status(500).json({ message: 'Failed to fetch hackathons' });
  }
});

router.post('/create-hackathon', createHackathon);

module.exports = router;
