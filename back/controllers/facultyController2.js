const College = require("../models/collegeModel");
const Department = require("../models/departmentModel");
const Division = require("../models/subDivisionModel");
const Faculty = require('../models/facultyModel');
const Subject = require('../models/SubjectsModel');


exports.getStructure = async (req, res) => {
    try {

        const { college, department, division } = req.query;

        let col = college ? college : false;
        let dep = department ? department : false;
        let div = division ? division : false;

        if (!college) {
            throw new Error("College is Not given.");
        }
        else {

            if (department) {


                if (division) {
                    // for finding division


                    if (div == "all") {


                        if (dep == 'all' && col == "all") {
                            // dep = all , col = all  ---
                            let tempdivision = await Division.find({}).populate({
                                path: 'department college mentorId'
                            })
                            if (tempdivision.length == 0) {
                                throw new Error("No division Found")
                            }

                            res.status(200).json({
                                status: true,
                                data: tempdivision

                            })

                        }

                        else if (dep != 'all' && col == 'all') {
                            // dep = not , col = all  ---

                            let data = [];
                            let tempdivision = await Division.find({}).populate({
                                path: 'department college mentorId'
                            })


                            if (tempdivision.length == 0) {
                                throw new Error("No division Found")
                            }

                            tempdivision.map((e) => {
                                if (e.department.departmentName == dep) {
                                    data = [...data, e]
                                }
                            })


                            res.status(200).json({
                                status: true,
                                data

                            })

                        }
                        else if (dep == 'all' && col != 'all') {
                            // dep = all , col = not ---

                            let data = [];
                            let tempdivision = await Division.find({}).populate({
                                path: 'department college mentorId'
                            })


                            if (tempdivision.length == 0) {
                                throw new Error("No division Found")
                            }

                            tempdivision.map((e) => {
                                if (e.college.collegeName == col) {
                                    data = [...data, e]
                                }
                            })


                            res.status(200).json({
                                status: true,
                                data

                            })
                        }
                        else {
                            // dep = not , col = not ---

                            let data = [];
                            let tempdivision = await Division.find({}).populate({
                                path: 'department college mentorId'
                            })


                            if (tempdivision.length == 0) {
                                throw new Error("No division Found")
                            }

                            tempdivision.map((e) => {
                                if (e.college.collegeName == col && e.department.departmentName == dep) {
                                    data = [...data, e]
                                }
                            })


                            res.status(200).json({
                                status: true,
                                data

                            })


                        }


                    }
                    else {


                        if (dep == 'all' && col == "all") {
                            // dep = all , col = all  ---

                            let data = [];
                            let tempdivision = await Division.find({}).populate({
                                path: 'department college mentorId'
                            })
                            if (tempdivision.length == 0) {
                                throw new Error("No division Found")
                            }
                            tempdivision.map((e) => {
                                if (e.subDivisionName == div) {
                                    data = [...data, e]
                                }
                            })

                            res.status(200).json({
                                status: true,
                                data

                            })

                        }

                        else if (dep != 'all' && col == 'all') {
                            // dep = not , col = all  ---

                            let data = [];
                            let tempdivision = await Division.find({}).populate({
                                path: 'department college mentorId'
                            })


                            if (tempdivision.length == 0) {
                                throw new Error("No division Found")
                            }

                            tempdivision.map((e) => {
                                if (e.department.departmentName == dep && e.subDivisionName == div) {
                                    data = [...data, e]
                                }
                            })


                            res.status(200).json({
                                status: true,
                                data

                            })

                        }
                        else if (dep == 'all' && col != 'all') {
                            // dep = all , col = not ---

                            let data = [];
                            let tempdivision = await Division.find({}).populate({
                                path: 'department college mentorId'
                            })


                            if (tempdivision.length == 0) {
                                throw new Error("No division Found")
                            }

                            tempdivision.map((e) => {
                                if (e.college.collegeName == col && e.subDivisionName == div) {
                                    data = [...data, e]
                                }
                            })


                            res.status(200).json({
                                status: true,
                                data

                            })
                        }
                        else {
                            // dep = not , col = not ---

                            let data = [];
                            let tempdivision = await Division.find({}).populate({
                                path: 'department college mentorId'
                            })


                            if (tempdivision.length == 0) {
                                throw new Error("No division Found")
                            }

                            tempdivision.map((e) => {
                                if (e.college.collegeName == col && e.department.departmentName == dep && e.subDivisionName == div) {
                                    data = [...data, e]
                                }
                            })


                            res.status(200).json({
                                status: true,
                                data

                            })


                        }

                    }


                }
                else {


                    // for finding department


                    if (dep == 'all') {


                        if (col == 'all') {
                            // both are all

                            let tempDepartment = await Department.find({}).populate({ path: 'college hodDetails' })
                            if (tempDepartment.length == 0) {
                                throw new Error("No department Found")
                            }


                            res.status(200).json({
                                status: true,
                                data: tempDepartment

                            })

                        }
                        else {
                            // dep is all but col is diff

                            let tempdepa = await Department.find({}).populate({ path: 'college hodDetails' })
                            if (tempdepa.length == 0) {
                                throw new Error("No department Found")
                            }

                            let dataDep = [];


                            tempdepa.map((e) => {

                                if (e.college.collegeName == col) {
                                    dataDep = [...dataDep, e]
                                    console.log(e.college.collegeName)
                                }


                            })

                            res.status(200).json({
                                status: true,
                                data: dataDep

                            })



                        }





                    }
                    else {


                        if (col == 'all') {
                            // all in col but not in dep
                            let tempdepa1 = await Department.find({ departmentName: dep }).populate({ path: 'college hodDetails' })
                            if (tempdepa1.length == 0) {
                                throw new Error("No department Found")
                            }

                            res.status(200).json({
                                status: true,
                                data: tempdepa1

                            })

                        }
                        else {
                            // both are difrent

                            let tempdepa2 = await Department.find({ departmentName: dep }).populate({ path: 'college hodDetails' })


                            if (tempdepa2.length == 0) {
                                throw new Error("No department Found")
                            }

                            let dataDep2 = [];


                            tempdepa2.map((e) => {

                                if (e.college.collegeName == col) {
                                    dataDep2 = [...dataDep2, e]
                                    console.log(e.college.collegeName)
                                }


                            })


                            res.status(200).json({
                                status: true,
                                data: dataDep2

                            })

                        }

                    }




                }

            }
            else {
                // for finding college
                if (col == "all") {
                    let tempCOll = await College.find({}).populate('principalDetails')
                    if (tempCOll.length == 0) {
                        throw new Error("No college Found")
                    }
                    res.status(200).json({
                        status: true,
                        data: tempCOll

                    })

                }
                else {
                    let tempCOll = await College.find({ collegeName: col }).populate('principalDetails')
                    if (tempCOll.length == 0) {
                        throw new Error("No college Found")
                    }
                    res.status(200).json({
                        status: true,
                        data: tempCOll

                    })

                }


            }


        }



    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}


exports.updateFaculty = async (req, res) => {
    try {

        const { id } = req.params;

        let data = {};


        const { surname, facultyName, fatherName, motherName, phoneNumber, OtherphoneNumber, facultyType, email, birthDate, password, collegeName, departmentName, subDivisionName, image, salary, education } = req.body;

        for (let key in req.body) {

            data = {
                ...data,
                [key]: req.body[key]
            }
        }


        const tempDiv = await Faculty.findByIdAndUpdate(id, data, {
            new: true
        });

        
        if (!tempDiv) {
            throw new Error("Not Faculty was found.")
        }

        await tempDiv.save();


        res.status(200).json({
            status: true,
            data: tempDiv,
            msg: "Faculty is updated."

        })

    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}




exports.createSubject = async (req, res) => {
    try {

        const { subjectName, subjectCode, department, isMinor, difficultyLevel } = req.body;

        if (!subjectName || !department) {
            throw new Error("Please give all required Details")
        }

        let checkBeforCreating = await Subject.findOne({ subjectName, department });

        if (checkBeforCreating) {
            throw new Error("Subject is alredy Present")
        }

        let createSubject = await Subject.create({
            ...req.body
        })

        res.status(200).json({

            "status": true,
            msg: "New Subject Created",
            data: createSubject
        })


    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}
exports.UpdateSubject = async (req, res) => {
    try {

        const { id } = req.params;

        const { subjectName, subjectCode, department, isMinor, difficultyLevel } = req.body;

        let findSubject = await Subject.findById(id);
        if (!findSubject) {
            throw new Error("No Subject found with given id.");
        }

        let updateSubject = await Subject.findByIdAndUpdate(id, { ...req.body }, { new: true });


        res.status(200).json({

            "status": true,
            msg: "Subject Updated !",
            data: updateSubject
        })



    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}
exports.deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        let findSubject = await Subject.findById(id);
        if (!findSubject) {
            throw new Error("No Subject found with given id.");
        }
        let deleteSubject = await Subject.findByIdAndDelete(id);
        res.status(200).json({

            "status": true,
            msg: "Subject Deleted !",
            data: deleteSubject
        })


    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}




exports.getSubjectByDepartment = async (req, res) => {
    try {
        const { id } = req.params;

        let tempDepart = await Department.findById(id);

        if (!tempDepart) {

            throw new Error("No department was found by given id.");
        }

        let AllSubjectByDepartment = await Subject.find({ department: tempDepart._id });

        res.status(200).json({
            "status": true,
            msg: "All Subject with Department.",
            data: AllSubjectByDepartment
        })




    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message

        });
    }
}

