const { default: mongoose } = require("mongoose");


const scoreModel = mongoose.Schema({
    score: { type: Number, require: true },
    userId: { type: String, require: true },
    level: { type: Number, require: true }
})

module.exports = mongoose.model('Score', scoreModel);