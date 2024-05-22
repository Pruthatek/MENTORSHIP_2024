const College = require('../models/collegeModel.js');
const Department = require('../models/departmentModel.js');
const Faculty = require('../models/facultyModel.js');
const Division = require('../models/subDivisionModel.js');









// post
exports.createDepartment = async (req, res) => {
    try {

        const { departmentName, hodDetails, fees, college, noOfStudent, noOfSemOfDepartment } = req.body

        // if (!hodName) {              // working if not given hodName
        //     console.log("hodName")
        // }
        if (!departmentName || !fees || !noOfStudent || !college || !noOfSemOfDepartment) {
            throw new Error("Please give all required Details")

        }



        const tempCollege = await College.findById(college);
        if (!tempCollege) {
            throw new Error("No college was found by given College ID")
        }

        const allDepartmentByCollege = await Department.find({ college: college });

        allDepartmentByCollege.forEach((e) => {

            if (e.departmentName == departmentName) {
                throw new Error("Department was already present")
            }

        })


        // if (tempDepartment) {

        //     if (tempDepartment.college.collegeName == tempCollege.collegeName) {
        //         throw new Error("Department was already present")
        //     }
        // }


        const data = await Department.create({
            ...req.body,
            college: tempCollege._id

        })

        res.status(200).json({
            status: true,
            data,
            msg: "New Department is Created."
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}







exports.createCollege = async (req, res) => {
    try {

        const { collegeName, principalDetails, logo } = req.body


        // give full name of princilName
        if (!collegeName) {
            throw new Error("Please give all required Details")

        }

        const ifany = await College.findOne({ collegeName });
        if (ifany) {
            throw new Error("College is Already available")
        }

        const data = await College.create({
            ...req.body,

        })

        res.status(200).json({
            status: true,
            data,
            msg: "New College is Created."
        })



    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}









exports.createFaculty = async (req, res) => {
    try {
        const { surname, facultyName, fatherName, motherName, email, phoneNumber, OtherphoneNumber, facultyType, collegeName, departmentName, joiningData, salary, education } = req.body

        if (!surname || !facultyName || !fatherName || !motherName || !email || !phoneNumber || !facultyType || !joiningData || !salary) {

            throw new Error("Please give all required Details")

        }


        let tempFullName = ''

        if (!fatherName) {
            tempFullName = `${surname} ${facultyName} ${motherName}`;
        } else {
            tempFullName = `${surname} ${facultyName} ${fatherName}`;
        }


        if (departmentName) {


            const tempDepa = await Department.findOne({ departmentName: departmentName });
            if (!tempDepa) {
                throw new Error("Department is May be not present.")
            }
        }

        if (collegeName) {

            const tempColle = await College.findOne({ collegeName: collegeName });

            if (!tempColle) {
                throw new Error("College is May be not present.")
            }
        }


        let isFacultyPresent = await Faculty.find({ "facultyFullName": tempFullName });
        if (!isFacultyPresent.length == 0) {
            throw new Error("Faculty is already present.")
        }



        const data = await Faculty.create(req.body);

        res.status(200).json(
            {
                status: true,
                data,
                msg: "New Faculty is Created."

            }
        )


    }
    catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}



exports.createSubDivision = async (req, res) => {
    try {

        const { subDivisionName, mentorId, department, college } = req.body;

        if (!subDivisionName || !department || !college) {

            throw new Error("Please give all required Details")

        }

        if (mentorId) {

            const tempMentor = await Faculty.findById(mentorId);
            if (!tempMentor) {
                throw new Error("No mentor was found by given Mentorid")
            }
        }

        const tempDepartment = await Department.findById(department).populate('college');
        if (!tempDepartment) {
            throw new Error("No department was found by given department name")
        }

        console.log(tempDepartment)


        const tempSubdivision = await Division.findOne({ subDivisionName, department: tempDepartment._id })
        if (tempSubdivision) {
            throw new Error("Division is already present")
        }



        if (tempDepartment.college._id != college) {
            throw new Error("College Have no such department.")
        }


        const newSubDivi = await Division.create({
            subDivisionName,
            mentorId,
            college: tempDepartment.college._id,
            department: tempDepartment._id,
        })

        res.status(200).json({
            status: true,
            data: newSubDivi,
            msg: "New Division is created"
        })




    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}


exports.deleteFaculty = async (req, res) => {
    try {

        const { id, facultyType } = req.params;
        console.log(id);
        console.log(facultyType);

        if (facultyType == "college") {

        }
        if (facultyType == 'department') {

        }
        if (facultyType == 'faculty') {


            // const findFaculty = await Faculty.findById(id);

            // if (!findFaculty) {
            //     throw new Error("Faculty not found.")
            // }

            // const tempFaculty = await Faculty.findByIdAndDelete(id);



            // let facultyType = tempFaculty.facultyType;

            // if (facultyType == "chairman") {

            //     res.status(200).json({
            //         status: true,
            //         msg: "You can't able to delete Chairman"
            //     })
            // }
            // if (facultyType == "principal") {

            //     await College.updateMany(
            //         { principalDetails: tempFaculty._id },
            //         { $set: { principalDetails: undefined, principalDetails: undefined } }
            //     );

            // }
            // if (facultyType == "hod") {

            // }
            // if (facultyType == "mentor") {

            // }
            // else {
            //     throw new Error("Something might be wrong")
            // }


            // res.status(200).json({
            //     status: true,
            //     msg: `${tempFaculty.facultyFullName} is deleted.`
            // })

        }

        res.json({
            status: true,

        })

    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}



exports.updateCollege = async (req, res) => {
    try {



        const { id } = req.params;
        let data = {};

        const { place, address, principalDetails, collegeName, logo } = req.body;
        for (let key in req.body) {

            data = {
                ...data,
                [key]: req.body[key]
            }
        }


        if (principalDetails) {

            const tempPrincipal = await Faculty.findById(principalDetails);
            if (!tempPrincipal) {

                throw new Error("No Faculty was found.")
            }

            data = {
                ...data,

            }

        }


        const tempCollege = await College.findByIdAndUpdate(id, data, {
            new: true
        });
        if (!tempCollege) {
            throw new Error("Not College was found.")
        }

        res.status(200).json({
            status: true,
            data: tempCollege
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}



exports.updateDepartment = async (req, res) => {
    try {


        // upadateion of collegename of department is later  
        const { id } = req.params;

        let data = {};


        const { departmentName, couseTeached, hodDetails, fees, noOfStudent, college, noOfSemOfDepartment, topper } = req.body;

        for (let key in req.body) {

            data = {
                ...data,
                [key]: req.body[key]
            }
        }

        if (hodDetails) {

            const temphod = await Faculty.findById(hodDetails);
            if (!temphod) {

                throw new Error("No Faculty was found.")
            }

            data = {
                ...data,
                hodDetails: temphod._id
            }

        }

        const tempDepartment = await Department.findByIdAndUpdate(id, data, {
            new: true
        });
        if (!tempDepartment) {
            throw new Error("Not Department was found.")
        }


        res.status(200).json({
            status: true,
            data: tempDepartment
        })




    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}

exports.upadteDivision = async (req, res) => {
    try {
        const { id } = req.params;

        let data = {};


        const { subDivisionName, thisMonthMentoringStatus, mentorId, department, noOfStudent, cr, lr } = req.body;

        for (let key in req.body) {

            data = {
                ...data,
                [key]: req.body[key]
            }
        }

        if (mentorId) {

            const tempDivision = await Faculty.findById(mentorId);
            if (!tempDivision) {

                throw new Error("No Faculty was found.")
            }

            data = {
                ...data,
                mentorId: tempDivision._id
            }

        }

        if (department) {
            const tempDepartment = await Department.findById(department).populate('college');
            if (!tempDepartment) {
                throw new Error("No department was found by id.")
            }

            data = {
                ...data,
                college: tempDepartment.college._id
            }
        }

        // const tempDiv = await Division.findById(id).populate({
        //     path: 'college mentorId',
        //     select: 'facultyFullName place'
        // });
        // populating multiple fields


        const tempDiv = await Division.findByIdAndUpdate(id, data, {
            new: true
        });
        if (!tempDiv) {
            throw new Error("Not Department was found.")
        }

        res.status(200).json({
            status: true,
            data: tempDiv

        })

    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}





