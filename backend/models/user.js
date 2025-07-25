const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    default: 'student',
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiry: {
    type: Date,
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
