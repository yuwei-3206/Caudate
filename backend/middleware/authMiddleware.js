const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Authorization denied. No token provided.' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user by decoded ID
        const user = await User.findById(decoded.id);

        if (!user) {
            throw new Error();
        }

        // Attach user object to request
        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication error:', error.message);
        res.status(401).json({ message: 'Authorization denied. Invalid token.' });
    }
};

module.exports = authMiddleware;
