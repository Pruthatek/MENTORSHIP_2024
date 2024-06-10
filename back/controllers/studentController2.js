const College = require('../models/collegeModel.js');
const Department = require('../models/departmentModel.js');
const Faculty = require('../models/facultyModel.js');
const Division = require('../models/subDivisionModel.js');
const Student = require('../models/StudentModel.js');
const readXlsxFile = require('read-excel-file/node');
const Results = require('../models/ResultModel.js');





exports.resultByStudentId = async (req, res) => {
    try {

        //studentid
        let { id, sem } = req.params;

        let allResult = await Results.findOne({ studentId: id, sem: sem });

        res.status(200).json({
            status: true,
            data: allResult
        })


    } catch (error) {
        res.status(400).json({
            status: false,
            msg: error.message
        });
    }
}