const Score = require('../models/Score');

const getScoresByUsername = async (req, res) => {
    const { username } = req.params;

    try {
        const scores = await Score.find({ username }).sort({ timestamp: -1 }).limit(5);
        res.status(200).json(scores);
    } catch (error) {
        console.error('Error fetching scores:', error);
        res.status(500).json({ error: 'Server error.' });
    }
};

const saveScore = async (req, res) => {
    const { username, score, level } = req.body;

    try {
        const newScore = new Score({
            username,
            score,
            level
        });

        await newScore.save();
        res.status(201).json({ message: 'Score saved successfully.', score: newScore });
    } catch (error) {
        console.error('Error saving score:', error);
        res.status(500).json({ error: 'Server error.' });
    }
};

module.exports = {
    getScoresByUsername,
    saveScore
};
