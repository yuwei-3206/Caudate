const mongoose = require("mongoose");
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userModel = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    fullName: { type: String, require: true },
    password: { type: String, require: false }
});

userModel.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userModel);