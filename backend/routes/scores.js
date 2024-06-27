const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scoresController');

// GET scores by username
router.get('/:username', scoresController.getScoresByUsername);

// POST a new score
router.post('/', scoresController.saveScore);

// GET the top scores by level
router.get('/top/:level', scoresController.getTopScoresByLevel);

module.exports = router;
