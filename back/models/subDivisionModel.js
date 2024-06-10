const mongoose = require('mongoose');


const subDepartment = new mongoose.Schema({

    subDivisionName: {
        type: String,
    },

    mentorId: {
        type: mongoose.Schema.ObjectId,
        ref: "Faculty"
    },
    thisMonthMentoringStatus: {
        type: Boolean,
        default: false
    },

    noOfStudent: Number,
    cr: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    lr: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },

    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },

    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    }

});

const Division = mongoose.model('Division', subDepartment);

module.exports = Division;