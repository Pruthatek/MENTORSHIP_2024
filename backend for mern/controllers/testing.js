const College = require('../models/collegeModel.js');
const Department = require('../models/departmentModel.js');
const Test = require('../models/testModel.js');
const readXlsxFile = require('read-excel-file/node')


exports.testing = async (req, res, next) => {

    try {

        if (true) {
            throw new Error("adsfadsfsldasfasffjldsjfdsl");
        }
        else {


            res.status(201).json({
                status: true,

            });

        }

    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message

        });

    }







}


exports.obj = async (req, res, next) => {
    try {



        // const dep = await Department.find({}).populate('college')

        const dep = await Department.create({
            departmentName: "BCA",
            hodName: "hod2",
            fees: 456540,
            noOfStudent: 27,
            noOfmonthsOfDepartment: 12

        })

        // console.log(dep)

        res.json({
            "stats": "asdf"
        })

    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message

        });

    }
}





exports.jjj = async (req, res, next) => {
    try {

        const newCOllege = await College.create({
            'collegeName': "ksvasdfas",
            'principalName': "dhirajasdfsd",
        })


        console.log(newCOllege._id)

        res.json({
            "stats": "asdf"
        })

    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message

        });

    }
}


exports.excel = async (req, res) => {
    try {

        // xlsx-populate is also best xlsc libraby
        // for reading excel read-xlsx-file is best

        let data = [];


        const schema = {

            "name": {
                prop: "name",
                data: String
            }

        }

        await readXlsxFile('./testing.xlsx', { schema: schema, sheet: "Sheet1" }).then(rows => {

            data = [...data, ...rows.rows]
        })

        const da = await Test.insertMany(data);
        console.log(da)


        res.status(200).json({
            status: true,
            data

        });


    } catch (error) {

        res.status(400).json({
            status: false,
            msg: error.message

        });

    }
}
