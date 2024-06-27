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

const getTopScoresByLevel = async (req, res) => {
    const { level } = req.params;

    try {
        console.log('Fetching top scores for level:', level);
        let topScores = await Score.find({ level })
            .sort({ score: 1 })
            .limit(30);

            console.log('Top scores retrieved:', topScores);
        if (topScores.length === 0) {
            return res.status(404).json({ error: 'No scores found for this level.' });
        }

        // If less than 10 scores found, send them all
        if (topScores.length < 10) {
            return res.status(200).json(topScores);
        }

        res.status(200).json(topScores);
    } catch (error) {
        console.error('Error fetching top scores:', error);
        res.status(500).json({ error: 'Server error.' });
    }
};


module.exports = {
    getScoresByUsername,
    saveScore,
    getTopScoresByLevel,
};
