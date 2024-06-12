const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/create', usersController.createUser);
router.post('/login', usersController.loginUser);

module.exports = router;
