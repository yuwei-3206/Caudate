const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

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
            return res.status(401).json({ message: 'Invalid password. Please try again' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Token expires in 1 hour
        });

        console.log(`Login successful for user ${username}`);
        console.log('Generated token:', token); // Check if token is generated
        console.log('Username:', user.username); // Check if username is retrieved

        // Send token and username in response
        res.status(200).json({ message: 'Login successful.', token, username: user.username });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error.' });
    }
};

const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching current user:', error);
        res.status(500).json({ error: 'Server error.' });
    }
};

module.exports = {
    createUser,
    loginUser,
    getCurrentUser,
};
