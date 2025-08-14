const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes'); 
const AdoptionRoutes = require('./routes/AdoptionRoutes'); // match name exactly
const ServiceRoutes=require('./routes/ServiceRoutes');
const feedbacks=require('./routes/FeeddbackRoutes');
const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));
mongoose.connection.once('open', () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/adoptionforms', AdoptionRoutes);
app.use('/api/bookings', ServiceRoutes);
app.use('/api/feedbacks', feedbacks);


app.get('/test', (req, res) => {
  res.send('Backend is working');
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
