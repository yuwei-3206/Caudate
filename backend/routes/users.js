const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

router.post('/create', usersController.createUser);
router.post('/login', usersController.loginUser);
router.get('/me', authMiddleware, usersController.getCurrentUser);

module.exports = router;
