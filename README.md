🌐 Weather API Backend
    A Node.js + Express backend that securely fetches current weather and forecast data from the OpenWeatherMap API.
    This backend acts as a proxy, ensuring that API keys are never exposed to the frontend.

🚀 Frontend Repository: 
   
    https://github.com/Lakshjagtap/weatherfrontend

🚀 Features

-RESTful API with Express.js
-Fetches real-time current weather and forecast
-Secure API key management via environment variables
-Handles errors for invalid city names or API failures
-CORS enabled for frontend integration
-Automatically deployed using Render Cloud Platform with GitHub integration

🛠️ Tech Stack

-Node.js
-Express.js
-Axios – for API requests
-dotenv – for environment variables
-CORS – cross-origin requests
-OpenWeatherMap API
-Render – cloud deployment

📌 API Endpoints
🔹 Get Current Weather

    GET /api/weather?city={cityName}

🔹 Get Weather Forecast

    GET /api/forecast?city={cityName}


Query Parameters:

city – Name of the city to fetch weather for (required)

🔐 Environment Variables

Create a .env file in the root directory:
API_KEY=your_openweathermap_api_key
PORT=3000

⚠️ Make sure .env is listed in .gitignore to prevent exposing API keys.

⚙️ Setup Instructions (Local Development)
git clone https://github.com/Lakshjagtap/weatherbackend
cd weatherbackend
npm install
npm start

Server runs at:

    http://localhost:3000

🌍 Deployment on Render

-Backend is deployed on Render Cloud Platform
-Connected directly to GitHub for automatic deployments on push
-Environment variables are managed securely in Render dashboard
-Frontend communicates with this deployed backend to fetch weather data

🧩 Architecture Overview

    Frontend (HTML, CSS, JavaScript)
            |
            | Fetch API
            ↓
    Backend (Node.js, Express)  <- Deployed on Render
            |
            ↓
    OpenWeatherMap API

🧠 What This Backend Demonstrates

-Secure handling of third-party APIs
-REST API design using Express
-Environment-based configuration
-Cloud deployment with GitHub CI workflow
-Separation of frontend and backend responsibilities

👨‍💻 Author

Nikhil Jagtap
    
    GitHub: https://github.com/Lakshjagtap
