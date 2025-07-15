
const User = require('../models/user'); // adjust the path if needed
const Hackathon = require('../models/Hackathon');

// GET /api/admin/users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'name email role'); // fetch specific fields
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error while fetching users' });
  }
};
// DELETE /api/admin/user/:id
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: 'Server error while deleting user' });
  }
};




const updateUserRole = async (req, res) => {
  const userId = req.params.id;
  const { role } = req.body;

  if (!['student', 'admin'].includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User role updated', user: updatedUser });
  } catch (err) {
    console.error('Error updating user role:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
const createHackathon = async (req, res) => {
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
      codingInstructions
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
      codingInstructions: mode === 'coding' ? codingInstructions : ''
    });

    await newHackathon.save();
    res.status(201).json({ message: 'Hackathon created successfully!' });
  } catch (error) {
    console.error('Error creating hackathon:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = {
  getAllUsers,
  deleteUser,
  updateUserRole,// ✅ Add this line
  createHackathon
};