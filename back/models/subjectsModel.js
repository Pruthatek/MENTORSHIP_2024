
const mongoose = require('mongoose');
const College = require('./collegeModel');
const Department = require('./departmentModel');




const subjectSchema = new mongoose.Schema({

    subjectName: String,
    subjectCode: String,
    department: {
        type: mongoose.Schema.ObjectId,
        ref: "Department"
    },
    college: {
        type: mongoose.Schema.ObjectId,
        ref: "College"
    },
    isMinor: {
        type: Boolean,
        default: false
    },
    difficultyLevel: Number




});

subjectSchema.pre("save", async function (next) {

    let findDepartment = await Department.findById(this.department);
    this.college = findDepartment.college;



    next();

})

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;