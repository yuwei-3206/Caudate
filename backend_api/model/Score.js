const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    level: { type: Number, required: true },
    score: { type: String, required: true }
});

module.exports = mongoose.model('Score', scoreSchema);