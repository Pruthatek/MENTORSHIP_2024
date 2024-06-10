const express = require("express");
const { testing, obj, jjj, excel } = require("../controllers/testing.js");
const router = express.Router();

const { createStudent, updateStudent, deleteStudent, textex, getStudentByDivisionId, getStudentByDepartmentId, excelForCreateStudents, excelForResult } = require('../controllers/studentController.js')
const { resultByStudentId } = require('../controllers/studentController2.js');



router.route("/createStudent").post(createStudent);
router.route("/updateStudent/:id").post(updateStudent);
router.route("/deleteStudent/:id").delete(deleteStudent);
router.route("/getStudentByDivisionId/:id").get(getStudentByDivisionId);
router.route("/getStudentByDepartmentId/:id").get(getStudentByDepartmentId);
router.route("/excelForCreateStudents").post(excelForCreateStudents);

router.route("/excelForResult/:id").patch(excelForResult);
router.route("/resultByStudentId/:id/:sem").post(resultByStudentId);

router.route("/textex").post(textex);
















//testing purpose
// router.route("/testing").get(testing);
// router.route("/obj").get(obj);
// router.route("/jjj").get(jjj);


module.exports = router;