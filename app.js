const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// set up body-parser middleware to parse JSON requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/hotel', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// set up routes
app.use('/bookings', require('./routes/booking'));

// start the server
app.listen(3000, () => console.log('Server started on port 3000'));
