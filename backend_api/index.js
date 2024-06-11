const express = require('express');
const { default: mongoose } = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const app = express();
const port = 3000;

const User = require("./model/User");
const Score = require("./model/Score");

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

function generateUniqueUserId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Create a new user
app.post('/api/users/', async (req, res) => {
    const { username } = req.body
    try {
        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists.' });
        }
        // Create new user
        const newUser = new User({
            username,
        });
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User created successfully.', savedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
});


// Create a score with user
app.post('/api/scores/', async (req, res) => {
    const { username, score, level } = req.body
    console.log(req.body)
    try {
        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            const newScore = new Score({
                username: username,
                score: score,
                level: level
            })

            const savedScore = await newScore.save();
            res.status(201).json({ message: 'User score saved.', savedScore });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
})



app.get("/check-status", (req, res) => {
    res.send("testing");
})



// Route handler for root URL
app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

app.listen(port, () => {
    console.info(`⚙️ Server running on port localhost:${port}`);
});
