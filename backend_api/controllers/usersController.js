const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Controller methods
const createUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully.', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
};

const loginUser = async (req, res) => {
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

        // Check if passwords match
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        console.log(`Login successful for user ${username}`);

        res.status(200).json({ message: 'Login successful.' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error.' });
    }
};


// Export controller methods
module.exports = {
    createUser,
    loginUser,
};
