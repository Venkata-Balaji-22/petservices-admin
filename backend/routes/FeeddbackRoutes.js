const express = require('express');
const feedback = require('../models/Feedback');
const router = express.Router();

console.log("Adoption route loaded");

// GET all Adoptions
router.get('/', async (req, res) => {
  try {
    const Feedback = await feedback.find();
    
console.log("Fetched from DB:", Feedback);
    res.json(Feedback);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// DELETE adoption by ID
router.delete('/:id', async (req, res) => {
  try {
    const Feedback = await feedback.findByIdAndDelete(req.params.id);
    
    if (!Feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.json({ message: 'Order deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
