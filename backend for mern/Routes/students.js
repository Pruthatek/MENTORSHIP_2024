const express = require("express");
const { testing, obj, jjj, excel } = require("../controllers/testing.js");
const router = express.Router();

const { createStudent, updateStudent, deleteStudent, getStudentByDivisionId, getStudentByDepartmentId, excelForCreateStudents, excelForResult } = require('../controllers/studentController.js')




router.route("/createStudent").post(createStudent);
router.route("/updateStudent/:id").post(updateStudent);
router.route("/deleteStudent/:id").delete(deleteStudent);
router.route("/getStudentByDivisionId/:id").get(getStudentByDivisionId);
router.route("/getStudentByDepartmentId/:id").get(getStudentByDepartmentId);
router.route("/excelForCreateStudents").post(excelForCreateStudents);
router.route("/excelForResult").post(excelForResult);















//testing purpose
// router.route("/testing").get(testing);
// router.route("/obj").get(obj);
// router.route("/jjj").get(jjj);


module.exports = router;