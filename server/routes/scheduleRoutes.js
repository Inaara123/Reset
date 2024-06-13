const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// POST endpoint to create a new schedule
router.post('/', async (req, res) => {
  try {
    const { fullName, contact, date, time, notes } = req.body;

    // Create a new schedule document
    const schedule = new Schedule({ fullName, contact, date, time, notes });

    // Save the schedule to the database
    await schedule.save();

    res.status(201).json({ message: 'Schedule created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating schedule' });
  }
});

module.exports = router;
