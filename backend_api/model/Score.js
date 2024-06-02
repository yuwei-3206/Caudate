const { default: mongoose } = require("mongoose");


const scoreModel = mongoose.Schema({
    score: { type: Number, require: true },
    userId: { type: String, require: true },
    timings: { type: String, require: false },
    level: { type: Number, require: true }
})

module.exports = mongoose.model('Score', scoreModel);