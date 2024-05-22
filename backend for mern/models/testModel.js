
const mongoose = require('mongoose');
const { type } = require('requests');


const testSchema = new mongoose.Schema({
    name: String

});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;