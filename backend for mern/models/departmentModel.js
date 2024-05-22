const mongoose = require('mongoose');
const College = require('./collegeModel');


const depparmentSchema = new mongoose.Schema({



    departmentName: {
        type: String,
    },
    couseTeached: String,
    hodDetails: {
        type: mongoose.Schema.ObjectId,
        ref: "Faculty"
    },
    fees: Number,
    noOfStudent: {
        type: Number,
        default: 0
    },
    noOfSemOfDepartment: Number,    // semesters
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College'
    },


    // results
    topper: [
        {
            year: Number,
            sem: Number,
            topperId: {
                type: mongoose.Schema.ObjectId,
                ref: "Student"
            },
            percentage: Number,
            spi: Number,
            cpi: Number
        }
    ]

});






// working with .create
// depparmentSchema.pre('save', function (next) {

//     this.tes = this.fees
//     next();
// });


depparmentSchema.pre('save', async function (next) {

     

    next();
});


const Department = mongoose.model('Department', depparmentSchema);

module.exports = Department;


