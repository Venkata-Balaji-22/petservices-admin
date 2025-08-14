const express = require('express');
const Adoption = require('../models/Adoption');
const router = express.Router();

console.log("Adoption route loaded");

// GET all Adoptions
router.get('/', async (req, res) => {
  try {
    const adopt = await Adoption.find();
    
console.log("Fetched from DB:", adopt);
    res.json(adopt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// DELETE adoption by ID
router.delete('/:id', async (req, res) => {
  try {
    const adopt = await Adoption.findByIdAndDelete(req.params.id);
    
    if (!adopt) {
      return res.status(404).json({ message: 'Bookings not found' });
    }
    res.json({ message: 'Order deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
