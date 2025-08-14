const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  ServiceType: { type: String, required: true },
  location: { type: String, required: true },
}, { timestamps: true ,collection: 'bookings' });

module.exports = mongoose.model('Service', serviceSchema);
