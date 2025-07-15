// routes/studentRoutes.js
//@ts-nocheck
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddlewares');
const Hackathon = require('../models/Hackathon');

// GET: All quiz-type hackathons for student
router.get('/hackathons', authenticateToken, async (req, res) => {
  try {
    const hackathons = await Hackathon.find({ mode: 'quiz' });
    res.json(hackathons);
  } catch (err) {
    console.error('❌ Failed to fetch hackathons:', err);
    res.status(500).json({ message: 'Error retrieving hackathons' });
  }
});

// GET: Quiz questions for a specific hackathon
router.get('/hackathons/:id/quiz', authenticateToken, async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id);
    if (!hackathon || hackathon.mode !== 'quiz') {
      return res.status(404).json({ message: 'Hackathon not found or not a quiz' });
    }
    res.json({ quizQuestions: hackathon.quizQuestions });
  } catch (err) {
    console.error('❌ Failed to fetch quiz:', err);
    res.status(500).json({ message: 'Error loading quiz questions' });
  }
});

// POST: Submit quiz answers
router.post('/hackathons/:id/submit-quiz', authenticateToken, async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id);
    if (!hackathon || hackathon.mode !== 'quiz') {
      return res.status(404).json({ message: 'Hackathon not found or not a quiz' });
    }

    // 🔐 Prevent re-submission
    const alreadySubmitted = hackathon.submissions?.some(
      (submission) => submission.studentId.toString() === req.user.id
    );
    if (alreadySubmitted) {
      return res.status(400).json({ message: 'You have already submitted this quiz.' });
    }

    const { answers } = req.body;
    let score = 0;

    // ✅ Evaluate the quiz
    hackathon.quizQuestions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score++;
      }
    });

    // 💾 Store submission
    hackathon.submissions.push({
      studentId: req.user.id,
      answers,
      score
    });

    await hackathon.save();

    res.json({ score });

  } catch (err) {
    console.error('❌ Error submitting quiz:', err);
    res.status(500).json({ message: 'Error submitting quiz' });
  }
});

module.exports = router;
