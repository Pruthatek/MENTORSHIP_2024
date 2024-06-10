const mongoose = require('mongoose');
const { type } = require('requests');
const Department = require('./departmentModel');
const Division = require('./subDivisionModel');
const Results = require("./ResultModel");
const { findById } = require('./collegeModel');


const studentSchema = new mongoose.Schema({


    //student comman details
    fullName: {
        type: String,            // not take from front just do it from now
        unique: true
    },
    surname: String,
    studentName: String,
    fatherName: String,
    motherName: String,
    caste: String,
    dateOfBirth: String,
    email: {
        type: String,
        unique: true
    },
    gender: {
        type: String,
        enum: ['m', 'f', 'o']
    },


    //student location details
    address: String,
    studentPhoneNumber: String,
    fatherPhoneNumber: String,
    pincode: String,
    city: String,
    state: {
        type: String,
        default: "gujarat"
    },
    country: {
        type: String,
        default: "india"
    },



    //student gaurdian details
    guradianName: String,
    guradianRelation: String,
    guradianPhone: String,

    fatherOcc: String,
    motherOcc: String,


    //photos
    studentPhoto: String,
    fatherPhoto: String,
    motherPhoto: String,
    sscMarksheetPhoto: String,
    lcSheetPhoto: String,
    memoryPhoto: String,




    ssc: {
        type: Number,
        default: 0
    },
    hsc: {
        type: Number,
        default: 0
    },
    cpi: {
        type: Number,
        default: 0
    },
    spi: {
        type: Number,
        default: 0
    },







    //student Status in college
    isHostalStudent: {
        type: Boolean,
        default: false
    },

    isPassedOutStudent: {
        type: Boolean,
        default: false
    },
    thisMonthMentoringStatus: {
        type: Boolean,
        default: true
    },

    semFees: [
        {
            semName: {
                type: Number,
                default: 1
            },
            feesTotal: {
                type: Number,
                default: 5000
            },
            feesPaid: {
                type: Number,
                default: 2000
            },
            feesStatus: {
                type: Boolean,
                default: false
            },

        }
    ],


    //physical
    weight: Number,
    height: Number,



    //college details of student
    currentSem: {
        type: Number,
        default: 1
    },
    division: String,
    tempEnrollment: String,
    EnrollmentNumber: String,
    mentoringStartingYear: {
        type: Number

    },

    department: {
        type: mongoose.Schema.ObjectId,
        ref: "Department"

    },

    division: {
        type: mongoose.Schema.ObjectId,
        ref: "Division"

    },
    college: {
        type: mongoose.Schema.ObjectId,
        ref: "College"

    },



    // Auth for Students
    password: {
        type: String,
        default: null
    },
    isFirstTime: {
        type: Boolean,
        default: true
    },





    //attendence details
    currentMonthAttendence: {
        type: Number,
        default: 0              //percentage
    },

    semAttendence: [
        {
            semNumber: Number,
            semAttendence: Number  // avg attendence
        }
    ],


    CoCurricularActivities: [
        {
            standard: String,
            activityName: String,
            date: String,
            place: String

        }
    ],

    SeminarOrProject: [
        {
            standard: String,
            activityName: String,
            date: String,
            place: String

        }
    ],

    Organization: [
        {
            standard: String,
            activityName: String,
            date: String,
            place: String

        }
    ]






}, { timestamps: true });



studentSchema.pre("save", async function (next) {

    // const user = this;


    // console.log("is user modified()"+user.isModified());
    // console.log("is user modified with surname"+user.isModified('surname'));


    if (!this.fatherName) {

        this.fullName = this.surname + " " + this.studentName + " " + this.motherName;
    }
    else {

        this.fullName = this.surname + " " + this.studentName + " " + this.fatherName;
    }


    if (this.division) {

        const tempDivision = await Division.findById(this.division);
        this.department = tempDivision.department;
        this.college = tempDivision.college;
    }



    if (this.password != null) {
        this.isFirstTime = false
    }


    const isResult = await Results.findOne({ studentId: this._id });
    if (!isResult) {
        const tempResult = await Results.create({
            studentId: this._id,
            sem: this.currentSem
        })
    }
    next()
})





// Create the Student model using the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;