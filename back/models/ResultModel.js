
const mongoose = require('mongoose');



const resultSchema = new mongoose.Schema({

    studentId: {
        type: mongoose.Schema.ObjectId,
        ref: "Student"
    },

    sem: Number,

    mid: [

        {
            subjectName: String,
            totalMarks: Number,
            marks: Number
        }

    ],

    external: [

        {
            subjectName: String,
            totalMarks: Number,
            marks: Number
        }

    ],

    internal1: [

        {
            subjectName: String,
            totalMarks: Number,
            marks: Number
        }
    ],

    internal2: [

        {
            subjectName: String,
            totalMarks: Number,
            marks: Number
        }
    ],

    internal3: [

        {
            subjectName: String,
            totalMarks: Number,
            marks: Number
        }
    ],




}, {
    timestamps: true
});

const Results = mongoose.model('Results', resultSchema);

module.exports = Results;