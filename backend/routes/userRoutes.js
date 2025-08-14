// const express = require('express');
// const User = require('../models/User');
// const router = express.Router();
// console.log("Users route loaded");
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     console.error(error);
//     res.status(500).json({ message: err.message });
//   }
//   // In your userRoutes.js file
// // DELETE /api/users/:id - Delete a user by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ message: 'User deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// });


// module.exports = router;
const express = require('express');
const User = require('../models/User');
const router = express.Router();

console.log("Users route loaded");

// GET /api/users - Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/users/:id - Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
