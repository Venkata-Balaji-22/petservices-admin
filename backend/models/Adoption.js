const mongoose = require('mongoose');

const AdoptionSchema = new mongoose.Schema({
 name: { type: String, required: true },
    phone: { type: String, required: true },
    petName: { type: String, required: true },
    address: { type: String, required: true },
    reason: { type: String, required: true },
},{ collection: 'adoptionforms' });

module.exports = mongoose.model('Adoption', AdoptionSchema);
