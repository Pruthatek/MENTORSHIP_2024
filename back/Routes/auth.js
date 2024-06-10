const express = require("express");
const router = express.Router();
const { login, logout, setNewPass, work } = require("../controllers/authenticaion")


router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/setNewPass/:id").post(setNewPass);


router.route("/work").post(work);


module.exports = router;