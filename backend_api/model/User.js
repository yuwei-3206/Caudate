const mongoose = require("mongoose");
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userModel = mongoose.Schema({
    username: { type: String, required: true, unique: true },
});

userModel.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userModel);
