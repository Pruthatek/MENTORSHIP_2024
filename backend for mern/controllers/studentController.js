const College = require('../models/collegeModel.js');
const Department = require('../models/departmentModel.js');
const Faculty = require('../models/facultyModel.js');
const Division = require('../models/subDivisionModel.js');
const Student = require('../models/StudentModel.js');
const readXlsxFile = require('read-excel-file/node')





exports.createStudent = async (req, res, next) => {

    try {

        const { surname, studentName, fatherName, motherName, cast, dateOfBirth, email, gender, address, studentPhoneNumber, fatherPhoneNumber, pincode, city, state, guradianName, guradianRelation, guradianPhone, studentPhoto, fatherPhoto, motherPhoto, sscMarksheetPhoto, lcSheetPhoto, memoryPhoto, isHostalStudent, isPassedOutStudent, thisMonthMentoringStatus, semFees, currentSem, division, tempEnrollment, EnrollmentNumber, mentoringStartingYear, department, password, isFirstTime } = req.body;

        if (!surname || !studentName || !dateOfBirth || !EnrollmentNumber || !email || !gender || !division) {

            throw new Error("Please give all required Details")

        }


        let tempStringForCOmpar = "";
        if (!fatherName) {

            tempStringForCOmpar = fullName = surname + " " + studentName + " " + motherName;
        }
        else {

            tempStringForCOmpar = fullName = surname + " " + studentName + " " + fatherName;
        }



        const tempStudent = await Student.findOne({ fullName: tempStringForCOmpar });
        if (tempStudent) {
            throw new Error("Student is alredy Present with name :: " + tempStringForCOmpar)
        }

        const studentData = await Student.create(req.body);


        res.json({
            status: true,
            data: studentData,
            msg: "New Student is Created."
        })


    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message
        });
    }
}






exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        let data = {};
        console.log(id)
        const { surname, studentName, fatherName, motherName, cast, dateOfBirth, email, gender, address, studentPhoneNumber, fatherPhoneNumber, pincode, city, state, guradianName, guradianRelation, guradianPhone, studentPhoto, fatherPhoto, motherPhoto, sscMarksheetPhoto, lcSheetPhoto, memoryPhoto, isHostalStudent, isPassedOutStudent, thisMonthMentoringStatus, semFees, currentSem, division, tempEnrollment, EnrollmentNumber, mentoringStartingYear, department, password, isFirstTime } = req.body;

        for (let key in req.body) {

            data = {
                ...data,
                [key]: req.body[key]
            }
        }


        const tD = await Student.findById(id);
        if (!tD) {
            throw new Error("Student Not Found.");
        }

        const tempDataUpdate = await Student.findByIdAndUpdate(id, data, {
            new: true
        })
        await tempDataUpdate.save()

        res.status(200).json({
            status: true,
            msg: "Student Updated Succesfully.",
            data: tempDataUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}


exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const tD = await Student.findById(id);
        if (!tD) {
            throw new Error("Student Not Found.");
        }

        const tempDelete = await Student.findByIdAndDelete(id);

        res.status(200).json({
            status: true,
            msg: `${tempDelete.fullName} Deleted Succesfully.`,
            data: tempDelete
        })





    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}


exports.getStudentByDivisionId = async (req, res) => {
    try {
        const { id } = req.params;  // id of Division


        const findDivision = await Division.findById(id).populate({
            path: 'department college'
        });


        if (!findDivision) {
            throw new Error("Division is not found.")
        }

        const allStudents = await Student.find({ department: findDivision.department, college: findDivision.college })


        res.status(200).json({
            status: true,

            data: allStudents
        })





    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}


exports.getStudentByDepartmentId = async (req, res) => {
    try {
        const { id } = req.params;  // id of department


        const findDivision = await Department.findById(id);

        if (!findDivision) {
            throw new Error("Department is not found.")
        }

        const allStudents = await Student.find({ department: findDivision._id })


        res.status(200).json({
            status: true,

            data: allStudents
        })





    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}









exports.excelForCreateStudents = async (req, res) => {
    try {

        // xlsx-populate is also best xlsc libraby
        // for reading excel read-xlsx-file is best

        let data = [];
        let AddedStudent = [];
        let errStudent = [];

        const schema = {

            "surname": {
                prop: "surname",
                data: String
            },
            "studentName": {
                prop: "studentName",
                data: String
            },
            "fatherName": {
                prop: "fatherName",
                data: String
            },
            "motherName": {
                prop: "motherName",
                data: String
            },
            "dateOfBirth": {
                prop: "dateOfBirth",
                data: String
            },
            "email": {
                prop: "email",
                data: String
            },
            "gender": {
                prop: "gender",
                data: String
            },
            "EnrollmentNumber": {
                prop: "EnrollmentNumber",
                data: String
            },
            "division": {
                prop: "division",
                data: String
            },
            "department": {
                prop: "department",
                data: String
            },
            "college": {
                prop: "college",
                data: String
            },

        }




        await readXlsxFile('./testing.xlsx', { schema: schema, sheet: "Sheet1" }).then(rows => {

            data = [...data, ...rows.rows]
        })

        const tempCollege = await College.find()
        const tempDepa = await Department.find();
        const tempDivi = await Division.find();




        data.forEach(async (e, i) => {


            if (!e.college || !e.department || !e.division) {

                errStudent = [...errStudent, e];
            }
            else {

                // e.college,
                // e.department,
                // e.division

                tempCollege.forEach((element) => {
                    if (element.collegeName == e.college) {


                        tempDepa.forEach((hel) => {

                            if (hel.departmentName == e.department) {


                                tempDivi.forEach((veli) => {

                                    if (veli.subDivisionName == e.division) {
                                        // do someting


                                        let aaata = {
                                            ...e,
                                            college: element._id,
                                            department: hel._id,
                                            division: veli._id

                                        }

                                        AddedStudent = [...AddedStudent, aaata];



                                    }
                                })


                            }



                        })



                    }



                })












            }



        })




        let len = AddedStudent.length;
        let akt = 0;
        async function ToAddData() {

            let tempFullname = `${AddedStudent[akt].surname} ${AddedStudent[akt].studentName} ${AddedStudent[akt].fatherName}`;

            let tempStud = await Student.findOne(({ fullName: tempFullname }));
            if (tempStud) {

                console.log("Student is alredy present:::", tempStud.fullName);
                // console.log(AddedStudent[akt]);

            }
            else {
                let da = await Student.create(AddedStudent[akt]);
                await da.save();

                console.log("Student-" + akt + "-added::" + da.fullName)

            }

            akt++;


            if (akt != AddedStudent.length) {

                ToAddData()
            }

        }
        ToAddData();






        res.status(200).json({
            status: true,
            AddedStudent,
            error: errStudent

        });


    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message

        });

    }
}





exports.excelForResult = async (req, res) => {
    try {

        const { department } = req.body;

        let data = [];
        let tempData = [];

        const schema = {

            "studentName": {
                prop: "studentName",
                data: String
            },
            "subject1": {
                prop: "subject1",
                data: String
            },
            "subject2": {
                prop: "subject2",
                data: String
            },
            "subject3": {
                prop: "subject3",
                data: String
            },
            "subject4": {
                prop: "subject4",
                data: String
            },
            "subject5": {
                prop: "subject5",
                data: String
            },
            "subject6": {
                prop: "subject6",
                data: String
            },
            "subject7": {
                prop: "subject7",
                data: String
            },

        };


        await readXlsxFile('./result.xlsx', { sheet: "Sheet1" }).then(rows => {

            data = [...data, ...rows];



        });

        console.log("=========================================");


        let emp = [];


        let sideLengthV = data[0].length;
        let totalLengthH = data.length;


        data.map((element, index) => {
            let kal = { studentName: undefined, sem: undefined, mid: [], external: undefined, internal1: undefined, internal2: undefined, internal3: undefined };
            let team = [];

            element.map((ele, ind) => {


                if (index >= 1) {

                    kal.studentName = element[0];
                    kal.sem = element[1];

                    // if (ele[2] == "mid") {
                    //     team.push({
                    //         subjectName: data[0][3],
                    //         obtain: element[3]
                    //     })

                    // }


                    if (ind >= 3) {
                        console.log(data[0][ind]+"="+ele)
                        
                    }



                }


            })

            if (index >= 1) {
                // kal.mid = [...team];

                // console.log(kal)

                emp[index - 1] = kal
            }
            // emp.push(kal);

            console.log("_________________");

        })


        // console.log(emp)

        res.status(200).json({
            a: emp
        })


    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message
        });

    }
}