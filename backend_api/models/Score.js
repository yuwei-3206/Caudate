const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: String, required: true },
    level: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', scoreSchema);
