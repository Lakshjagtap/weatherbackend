require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON requests

const API_KEY = process.env.API_KEY; // Get the API key from .env
const BASE_URL = "https://api.openweathermap.org/data/2.5"; // OpenWeather API URL

// API endpoint to get current weather data
app.get('/api/weather', async (req, res) => {
    const city = req.query.city; // Get city name from the query parameter
    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                units: 'metric', // Celsius
                appid: API_KEY // API key
            }
        });
        res.json(response.data); // Send the weather data as a response
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        res.status(400).json({ error: "City not found or invalid" }); // Handle errors
    }
});

// API endpoint to get forecast data
app.get('/api/forecast', async (req, res) => {
    const city = req.query.city; // Get city name from the query parameter
    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    try {
        const response = await axios.get(`${BASE_URL}/forecast`, {
            params: {
                q: city,
                units: 'metric', // Celsius
                appid: API_KEY // API key
            }
        });
        res.json(response.data); // Send forecast data as a response
    } catch (error) {
        console.error("Error fetching forecast data:", error.message);
        res.status(400).json({ error: "Forecast data not available or invalid" }); // Handle errors
    }
});

// Default route for health check or basic info
app.get('/', (req, res) => {
    res.send('Weather API Backend is running.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
