// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Define a POST route for adding a new contact
router.post('/', async (req, res) => {
  const { fullName, email, reason, message } = req.body;

  try {
    const newContact = new Contact({
      fullName,
      email,
      reason,
      message,
    });

    const contactData = await newContact.save();
    res.json(contactData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
