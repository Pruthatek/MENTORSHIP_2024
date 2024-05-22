const mongoose = require('mongoose');
const { type } = require('requests');


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


    joiningData: String,
    image: String,

    salary: Number,
    education: String




});


facultySchema.pre("save", function (next) { // Changed arrow function to regular function to access 'this'
    if (!this.fatherName) {
        this.facultyFullName = `${this.surname} ${this.facultyName} ${this.motherName}`;
    } else {
        this.facultyFullName = `${this.surname} ${this.facultyName} ${this.fatherName}`;
    }
    next();
});



const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;