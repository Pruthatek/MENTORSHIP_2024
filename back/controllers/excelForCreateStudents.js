const College = require('../models/collegeModel.js');
const Department = require('../models/departmentModel.js');
const readXlsxFile = require('read-excel-file/node');

exports.excelForCreateStudents = async (req, res) => {
    try {

        // xlsx-populate is also best xlsc libraby
        // for reading excel read-xlsx-file is best
        let data = [];
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
        };




        await readXlsxFile('./testing.xlsx', { schema: schema, sheet: "Sheet1" }).then(rows => {

            data = [...data, ...rows.rows];
        });

        data.map(async (e) => {

            const tempCollege = await College.findOne({ collegeName: e.college });

            if (!tempCollege) {
                errStudent = [...errStudent, e];

            }
            else {

                const tempDepa = await Department.findOne({ departmentName: e.department });

                if (tempDepa.college == tempCollege._id) {

                    // check; for (sub; div;)
                    //     ;
                }



            }


            console.log(e);
            // let da = await Student.create(e);
            // da.save();
        });


        res.status(200).json({
            status: true,
            data,
            error: errStudent
        });


    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message
        });

    }
};



