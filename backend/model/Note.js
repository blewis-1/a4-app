const mongoose = require("mongoose");
const mongooseUniqueValidator = require('mongoose-unique-validator');

const noteModel = mongoose.Schema({
    note: { type: String, require: true },
});

noteModel.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Note', noteModel);