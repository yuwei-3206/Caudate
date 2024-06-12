require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/scores');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb+srv://yw829:Srkey11233206!@travel-mng.6qtlsr7.mongodb.net/?retryWrites=true&w=majority&appName=travel-mng';

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Configure CORS
const corsOptions = {
    origin: 'http://10.0.0.176:3000', // Replace with your frontend URL
    methods: ['GET', 'POST'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
};

// Use cors middleware with options
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/scores', gameRoutes);

// Error handling middleware
app.use(errorHandler);

// Default route
app.all('/', (req, res) => {
    res.send('Server is running successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
