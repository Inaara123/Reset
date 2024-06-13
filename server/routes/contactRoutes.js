const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Importing the Contact model

// Define a POST route for adding a new contact
router.post('/', async (req, res) => {
  // Destructure the request body to extract contact details
  const { fullName, organizationName, email, contact } = req.body;

  try {
    // Create a new Contact instance with the provided details
    const newContact = new Contact({
      fullName,
      organizationName,
      email,
      contact,
    });

    // Save the new contact to the database
    const contactData = await newContact.save();
    // Respond with the saved contact data in JSON format
    res.json(contactData);
  } catch (err) {
    // Log any errors to the console
    console.error(err.message);
    // Send a 500 (Server Error) response if an error occurs
    res.status(500).send('Server Error');
  }
});

module.exports = router; // Export the router for use in other parts of the application