const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const userRoutes = require('./Routes/userRoutes');
const restaurantRoutes = require('./Routes/restaurantRoutes');
const deliveryAgentRoutes = require('./Routes/deliveryAgentRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/delivery-agent', deliveryAgentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
