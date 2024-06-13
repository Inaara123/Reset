const express = require('express');
const cors = require('cors');
const connect = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // Use Express's built-in middleware for JSON parsing
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded




// Routes path
app.use('/contacts', contactRoutes);
app.use('/schedules', scheduleRoutes);



// Start the server
app.listen(5000, async () => {
    console.log("Server running on port 5000");
    try {
        await connect();
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
});