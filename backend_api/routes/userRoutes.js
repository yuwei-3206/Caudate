const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/User');

// Generate unique user_id
function generateUniqueUserId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Create a new user
router.post('/create', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists.' });
        }

        // Generate unique user_id
        const user_id = generateUniqueUserId();

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            password: hashedPassword,
            user_id
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully.', user_id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
});



// Log in
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Create JWT token
        const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send token in response
        res.status(200).json({ message: 'Login successful.', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
});

// Log out
router.post('/logout', (req, res) => {

    res.status(200).json({ message: 'Logout successful.' });
});

module.exports = router;
