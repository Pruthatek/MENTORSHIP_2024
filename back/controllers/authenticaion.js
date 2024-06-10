const College = require('../models/collegeModel.js');
const Department = require('../models/departmentModel.js');
const Faculty = require('../models/facultyModel.js');
const Division = require('../models/subDivisionModel.js');
const Student = require('../models/StudentModel.js');

exports.work = async (req, res) => {
    try {

        let stu = await Student.updateMany({ surname: { $ne: 'patel' } }, { $set: { mentoringStartingYear: 2024 } });



        res.status(200).json({
            data: stu
        })
    } catch (error) {

    }
}


exports.login = async (req, res) => {
    try {

        // i have username and pass in body

        const { username, password } = req.body;

        let tempStudent = await Student.findOne({ EnrollmentNumber: username }).populate({
            path: 'division',
            populate: {
                path: 'mentorId'
            }
        }).populate('department');

        if (tempStudent) {
            // if username is student

            if (tempStudent.isFirstTime) {
                // if student is first time then it check birthdate

                // check the birthdate
                if (password == tempStudent.dateOfBirth) {

                    res.status(200).json({
                        status: true,
                        firstTimeLogin: true,
                        canILogin: false,
                        msg: "Now you can set new Password",
                        data: { facultyType: "student" },
                        StudentData: tempStudent
                    })
                }
                else {
                    // throw new Error("Wrong Crediantials DOB")
                    throw new Error("Wrong Crediantials")

                }

            }

            // check password and give access
            else if (password == tempStudent.password) {


                res.status(200).json({
                    status: true,
                    canILogin: true,
                    firstTimeLogin: false,
                    msg: "SuccesFully Logged in",
                    data: { facultyType: "student" },
                    StudentData: tempStudent


                })
            }
            else {
                // throw new Error("the enrollment no is write but pass is wrong")
                throw new Error("Wrong Crediantials.")
            }

        }
        else {

            // if usernmae is not studetnt

            const tempFaculty = await Faculty.findOne({ facultyFullName: username });
            if (!tempFaculty) {
                throw new Error("No User was Found.")
            }
            else {
                if (password == tempFaculty.password) {


                    res.status(200).json({
                        status: true,
                        canILogin: true,
                        data: tempFaculty,
                        facultyType: tempFaculty.facultyType,
                        msg: "Succesfully Logged in."
                    })
                }
                else {
                    throw new Error("Wrong Crediantial for Faculty.")
                }
            }

        }




    } catch (error) {
        res.status(400).json({
            status: false,
            canILogin: false,
            msg: error.message

        });
    }
}




exports.logout = async (req, res) => {
    try {


        res.status(200).json({
            "status": true,
            msg: "Logout Succesfull.",
            isLogOut: true
        })


    } catch (error) {
        res.status(400).json({
            status: false,
            canILogin: false,
            msg: error.message

        });
    }
}


//to setnewPassword for firsttime
exports.setNewPass = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        let tempStudent = await Student.findById(id);
        if (!tempStudent) {
            throw new Error("No student found.")
        }

        tempStudent.password = password;
        tempStudent.isFirstTime = false;
        await tempStudent.save();

        res.status(200).json({
            status: true,
            "msg": "Succesfuly password setted."

        })




    } catch (error) {
        res.status(400).json({
            status: false,
            canILogin: false,
            msg: error.message

        });
    }
}