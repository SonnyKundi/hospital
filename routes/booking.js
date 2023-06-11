const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const Booking = require('../models/booking');

// POST /bookings - create a new booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).send(booking);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
