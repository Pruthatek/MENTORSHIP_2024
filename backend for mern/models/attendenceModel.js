const mongoose = require('mongoose');


const attendenceSchema = new mongoose.Schema({

    // studentId
    date: String,
    lectures: [
        {
            subjectName: Boolean
        }
    ],
    totalLecture: Number



},{
    timestamps: true
});

const attendence = mongoose.model('attendence', attendenceSchema);

module.exports = attendence;