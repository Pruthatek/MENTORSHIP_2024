const mongoose = require('mongoose');


const College = require('./collegeModel');
const Division = require('./subDivisionModel');
const Department = require('./departmentModel');


const facultySchema = new mongoose.Schema({

    facultyFullName: {
        type: String,            // not take from front just do it from now
        unique: true
    },
    surname: String,
    facultyName: String,
    fatherName: String,
    motherName: String,
    phoneNumber: Number,
    OtherphoneNumber: Number,
    facultyType: {
        type: String,
        enum: ['chairman', 'principal', 'hod', 'mentor']

    },
    email: String,
    birthDate: String,

    password: String,

    collegeName: String,
    departmentName: String,

    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    },


    subDivisionName: String,


    joiningData: String,
    image: String,

    salary: Number,
    education: String




});


facultySchema.pre("save", async function (next) { // Changed arrow function to regular function to access 'this'
    if (!this.fatherName) {
        this.facultyFullName = `${this.surname} ${this.facultyName} ${this.motherName}`;
    } else {
        this.facultyFullName = `${this.surname} ${this.facultyName} ${this.fatherName}`;
    }


    if (this.subDivisionName) {

        let din = await Division.findById(this.subDivisionName).populate('department college')

        this.collegeName = din.college.collegeName;
        this.collegeId = din.college._id
        this.departmentId = din.department._id;
        this.departmentName = din.department.departmentName;

    }


    if (this.departmentName) {
        let col = await Department.findOne({ "departmentName": this.departmentName }).populate("college");

        this.collegeName = col.college.collegeName;
        this.collegeId = col.college._id

    }

    if (this.collegeName) {
        let col = await College.findOne({ "collegeName": this.collegeName });

        this.collegeName = col.collegeName;
        this.collegeId = col._id

    }



    next();
});



const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;