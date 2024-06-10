const mongoose = require("mongoose");
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userModel = mongoose.Schema({
    user_id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userModel.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userModel);
