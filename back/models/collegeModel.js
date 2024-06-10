const mongoose = require('mongoose');


const collegeModel = new mongoose.Schema({



    collegeName: {
        type: String,
        unique: true
    },
    place: String,
    address: String,
    principalDetails: {
        type: mongoose.Schema.ObjectId,
        ref: "Faculty"
    },
    logo: String,



});

const College = mongoose.model('College', collegeModel);

module.exports = College;