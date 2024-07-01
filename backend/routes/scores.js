const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scoresController');

router.get('/:username', scoresController.getScoresByUsername);
router.post('/', scoresController.saveScore);
router.get('/top/:level', scoresController.getTopScoresByLevel);

module.exports = router;
