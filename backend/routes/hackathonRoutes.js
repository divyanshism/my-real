const express = require('express');
const router = express.Router();
const Hackathon = require('../models/Hackathon');

// POST /api/admin/create-hackathon
router.post('/create-hackathon', async (req, res) => {
  try {
    const {
      name,
      description,
      rules,
      mode,
      startDate,
      endDate,
      teamSize,
      quizQuestions,
      codingInstructions,
    } = req.body;

    const newHackathon = new Hackathon({
      name,
      description,
      rules,
      mode,
      startDate,
      endDate,
      teamSize,
      quizQuestions: mode === 'quiz' ? quizQuestions : [],
      codingInstructions: mode === 'coding' ? codingInstructions : '',
    });

    await newHackathon.save();
    res.status(201).json({ message: 'Hackathon created successfully' });

  } catch (error) {
    console.error('❌ Error creating hackathon:', error);
    res.status(500).json({ message: 'Server error while creating hackathon' });
  }
});
// GET /api/admin/all-hackathons
router.get('/all-hackathons', async (req, res) => {
  try {
    const hackathons = await Hackathon.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(hackathons);
  } catch (error) {
    console.error('❌ Error fetching hackathons:', error);
    res.status(500).json({ message: 'Server error while fetching hackathons' });
  }
});

module.exports = router;
