const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  rules: String,
  mode: { type: String, enum: ['quiz', 'coding'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  teamSize: Number,
  quizQuestions: [String],
  codingInstructions: String,
  submissions: [
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    answers: [String],
    score: Number,
    submittedAt: {
      type: Date,
      default: Date.now
    }
  }
]

}, { timestamps: true });


module.exports = mongoose.model('Hackathon', hackathonSchema);
