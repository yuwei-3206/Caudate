const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    username: { type: String, required: true },
    level: { type: String, required: true },
    score: { type: String, required: true }
});

module.exports = mongoose.model('Score', scoreSchema);