const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
 name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
},{ collection: 'feedbacks' });

module.exports = mongoose.model('Feedback', FeedbackSchema);

