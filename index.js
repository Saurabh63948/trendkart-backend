require('dotenv').config(); // Load .env variables first

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS

const app = express();

// Middleware for CORS - Use dynamic frontend URL based on environment
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173'; // Default to localhost if not set
app.use(cors({ origin: allowedOrigin })); // Allow CORS only from the frontend URL

app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
