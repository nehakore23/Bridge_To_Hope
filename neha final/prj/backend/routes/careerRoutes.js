const express = require("express");
const { addCareer, getAllCareer, addCareerParticipate, deleteCareerParticipate,checkCareerParticipateExists, getCareerParticipateUsers } = require("../controller/career");

const router = express.Router();

router.get("/all",getAllCareer)
router.post("/add",addCareer)
router.post("/addCareerParticipate",addCareerParticipate)
router.post("/deleteCareerParticipate",deleteCareerParticipate)
router.get("/checkCareerParticipateExists",checkCareerParticipateExists)
router.get("/getCareerParticipateUsers",getCareerParticipateUsers)

module.exports = router