const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware'); // Add middleware to verify the token

router.post('/register', registerUser);
router.post('/login', loginUser);

// Add protected route for fetching profile
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Don't send the password back
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
});

module.exports = router;
