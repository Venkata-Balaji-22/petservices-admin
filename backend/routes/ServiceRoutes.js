// const express = require('express');
// const Service = require('../models/Service');
// const router = express.Router();

// console.log("Service route loaded");

// // GET all Adoptions
// router.get('/', async (req, res) => {
//   try {
//     const service = await Service.find();
    
// console.log("Fetched from DB:", service);
//     res.json(service);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // DELETE adoption by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const service = await Service.findByIdAndDelete(req.params.id);
    
//     if (!service) {
//       return res.status(404).json({ message: 'Bookings not found' });
//     }
//     res.json({ message: 'Order deleted' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const bookings = require('../models/Service');
const router = express.Router();

console.log("Service route loaded ✅");

// GET all bookings
router.get('/', async (req, res) => {
  try {
    console.log("Fetching services from DB...");
    const services = await bookings.find();
    console.log("Fetched from DB:", services);
    res.json(services);
  } catch (err) {
    console.error("🔥 Error in GET /api/bookings:", err);
    res.status(500).json({
      message: err.message,
      stack: err.stack, // shows exact location of the error
    });
  }
});

// DELETE booking by ID
router.delete('/:id', async (req, res) => {
  try {
    const service = await bookings.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (err) {
    console.error("🔥 Error in DELETE /api/bookings/:id:", err);
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  }
});

module.exports = router;
