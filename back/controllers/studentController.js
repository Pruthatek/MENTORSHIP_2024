const College = require('../models/collegeModel.js');
const Department = require('../models/departmentModel.js');
const Faculty = require('../models/facultyModel.js');
const Division = require('../models/subDivisionModel.js');
const Student = require('../models/StudentModel.js');
const readXlsxFile = require('read-excel-file/node');
const Results = require('../models/ResultModel.js');
const { upload } = require('../helpers/multerSetup.js');
const fs = require('fs');
const path = require('path');

exports.textex = async (req, res) => {
    try {

        res.status(200).json({
            "working": 'asdf'
        })




    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message
        });
    }
}

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

        const { surname, studentName, fatherName, motherName, caste, dateOfBirth, email, gender, address, studentPhoneNumber, fatherPhoneNumber, pincode, city, state, guradianName, guradianRelation, guradianPhone, studentPhoto, fatherPhoto, motherPhoto, sscMarksheetPhoto, lcSheetPhoto, memoryPhoto, isHostalStudent, isPassedOutStudent, thisMonthMentoringStatus, semFees, currentSem, division, tempEnrollment, EnrollmentNumber, mentoringStartingYear, cpi, spi, department, password, isFirstTime } = req.body;

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

        const allStudents = await Student.find({ department: findDivision.department, college: findDivision.college }).populate({
            path: 'division',
            populate: {
                path: 'mentorId'
            }
        }).populate('department college');


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

        upload(req, res, async (err) => {
            console.log(req.file)
            if (err) {
                res.status(400).json({ msg: err });
            } else {
                if (req.file == undefined) {
                    res.status(400).json({ msg: 'No file selected!' });
                } else {


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
                        "mentoringStartingYear": {
                            prop: "mentoringStartingYear",
                            data: String
                        },

                    }


                    await readXlsxFile(`uploads/${req.file.filename}`, { schema: schema, sheet: "Sheet1" }).then(rows => {

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


                    const filePath = path.join('uploads', req.file.filename);

                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.log("some thing error")
                        }
                        else {

                            console.log("file delted");
                        }
                    });


                    res.status(200).json({
                        status: true,
                        AddedStudent,
                        error: errStudent

                    });




                    // //////////////////////////////////////
                    // res.status(200).json({
                    //     msg: 'File uploaded!',
                    //     file: `uploads/${req.file.filename}`
                    // });

                }
            }
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


        upload(req, res, async (err) => {

            if (err) {
                res.status(400).json({ msg: err });
            } else {
                if (req.file == undefined) {
                    res.status(400).json({ msg: 'No file selected!' });
                }
                else {


                    const { id } = req.params;

                    let data = [];

                    let tempDep = await Department.findById(id);
                    if (!tempDep) {
                        throw new Error("No department found with given id")
                    }


                    let tempData = [];


                    await readXlsxFile(`uploads/${req.file.filename}`, { sheet: "Sheet1" }).then(rows => {

                        data = [...data, ...rows];

                    });


                    console.log(data);
                    console.log("data passed from ====== 508");


                    let allStudentsForTest = await Student.find({ "department": id });

                    tempData[0] = data[0];
                    data.map((e, i) => {


                        allStudentsForTest.map((element, index) => {
                            if (element.fullName == e[0]) {

                                console.log(`found == ${element.fullName}`);

                                tempData.push(e)
                            }

                        })

                    })


                    console.log(tempData);
                    if (tempData.length == 0) {
                        throw new Error("No perfect student")
                    }
                    console.log("data passed from ====== 530");


                    let emp = [];


                    tempData.map((element, index) => {
                        let kal = { studentName: undefined, sem: undefined, mid: [], external: undefined, internal1: undefined, internal2: undefined, internal3: undefined };
                        let team = [];

                        element.map((ele, ind) => {

                            if (index >= 1) {

                                kal.studentName = element[0];
                                kal.sem = element[1];


                                if (ind >= 3 && ind % 2 != 0) {

                                    team.push({
                                        subjectName: tempData[0][ind],
                                        totalMarks: element[ind + 1],
                                        marks: element[ind]
                                    })


                                }

                            }

                        })

                        if (index >= 1) {
                            // kal.mid = [...team];

                            let checkExam = tempData[index][2];
                            switch (checkExam) {
                                case "mid":
                                    kal.mid = team;

                                    break;
                                case "internal1":

                                    kal.internal1 = team;

                                    break;
                                case "internal2":

                                    kal.internal2 = team;

                                    break;
                                case "internal3":

                                    kal.internal3 = team;

                                    break;
                                case "external":

                                    kal.external = team;

                                    break;

                                default:
                                    break;
                            }



                            emp[index - 1] = kal

                        }
                        // emp.push(kal);


                    })

                    console.log(emp);
                    console.log("data passed from ====== 608");


                    // for replacing the studentName with studentId of that perticaulr student

                    emp.map((element, index) => {

                        allStudentsForTest.map((ele, ind) => {

                            if (ele.fullName == element.studentName) {


                                delete emp[index].studentName;

                                emp[index].studentId = ele._id
                                // Object.defineProperty(emp[index], 'studentId', { value: ele._id });


                            }

                        })

                    })


                    console.log("-----")
                    console.log(emp)



                    let len = emp.length;
                    let tempElement = 0;
                    async function ToAddData() {


                        let tempStud = await Results.findOne({ studentId: emp[tempElement].studentId, sem: emp[tempElement].sem });


                        if (tempStud) {

                            let foundResult = await Results.findByIdAndUpdate(tempStud._id, emp[tempElement], { new: false });


                        }
                        else {

                            let newResult = await Results.create(emp[tempElement]);


                        }

                        tempElement++;

                        if (tempElement != emp.length) {

                            ToAddData()
                        }

                    }
                    ToAddData();



                    // console.log(emp)



                    const filePath = path.join('uploads', req.file.filename);

                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.log("some thing error")
                        }
                        else {

                            console.log("file delted");
                        }
                    });



                    res.status(200).json({
                        status: true,
                        data: emp

                    })




                }

            }


        })
    }




    catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message
        });

    }
}


exports.updateResult = async (req, res) => {

    try {

        const { StudentId } = req.params;
        const { mid, external, internal1, internal2, internal3 } = req.body;

        let tempStudent = await Results.findOne({ "studentId": StudentId });

        if (!tempStudent) {
            throw new Error("No student found.");
        }

        let tempObj = {};

        tempObj = { ...tempStudent };

        let std = await Results.findByIdAndUpdate(tempStudent._id, req.body, { new: true });

        res.status(200).json({
            status: true,
            data: std,
            msg: "Student Updated successfuly"
        })


    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message
        });

    }
}
