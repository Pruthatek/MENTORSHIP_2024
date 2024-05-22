const express = require("express");
const { createDepartment, createCollege, createFaculty, createSubDivision, deleteFaculty, updateCollege, updateDepartment, upadteDivision } = require("../controllers/facultyController");
const { getStructure, updateFaculty, createSubject, UpdateSubject, deleteSubject, getSubjectByDepartment } = require("../controllers/facultyController2");


const router = express.Router();

//search

router.route("/getAnyStructures").get(getStructure);
router.route("/getSubjectByDepartment/:id").get(getSubjectByDepartment);


//create
router.route("/createDepartment").post(createDepartment);
router.route("/createCollege").post(createCollege);
router.route("/createFaculty").post(createFaculty);
router.route("/createSubDivision").post(createSubDivision);
router.route("/createSubject").post(createSubject);


//delete
router.route("/deleteFaculty/:id/:facultyType").delete(deleteFaculty);  // compulsary have to give both  
router.route("/deleteSubject/:id").delete(deleteSubject);

//update
router.route("/updateCollege/:id").patch(updateCollege);
router.route("/updateDepartment/:id").patch(updateDepartment);
router.route("/upadteDivision/:id").patch(upadteDivision);
router.route("/updateFaculty/:id").patch(updateFaculty);
router.route("/UpdateSubject/:id").patch(UpdateSubject);





module.exports = router;