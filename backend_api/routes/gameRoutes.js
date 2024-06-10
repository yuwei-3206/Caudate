const express = require('express');
const router = express.Router();
const Score = require('../model/Score');

// Record game score
router.post('/score', async (req, res) => {
    try {
        const { user_id, level, score } = req.body;

        // Validate input data
        if (!user_id || !level || !score) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }

        // Create a new score document
        const newScore = new Score({
            user_id,
            level,
            score
        });

        // Save the score to the database
        await newScore.save();

        // Send success response
        res.status(201).json({ message: 'Score recorded successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
});

// Get a user's game history using user_id
router.get('/user/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const gameHistory = await Score.find({ user_id });
        res.status(200).json(gameHistory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
});

// Get the fastest 30 records
router.get('/global', async (req, res) => {
    try {
        // Convert the time format "00:00:00" to milliseconds for sorting
        const globalRecords = await Score.find().sort({ 
            // Convert the time string to milliseconds
            score: { 
                $substr: [
                    { $split: ["$score", ":"] },
                    0,
                    -1
                ]
            } 
        }).limit(30);

        res.status(200).json(globalRecords);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
});


module.exports = router;


