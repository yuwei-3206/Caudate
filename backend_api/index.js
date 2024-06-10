const express = require('express');
const { default: mongoose } = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const app = express();
const port = 3000;

// Access user data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS for frontend to interact from this origin
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Connect to database
const uri = "this is blank and needs to be processed from an env file.";
mongoose.connect(uri)
    .then(() => console.log("✅ Connected to database."))
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);

// Route handler for root URL
app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

app.listen(port, () => {
    console.info(`⚙️ Server running on port localhost:${port}`);
});
