const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scoresController');

// GET scores by username
router.get('/:username', scoresController.getScoresByUsername);

// POST a new score
router.post('/', scoresController.saveScore);

module.exports = router;
