const express = require("express");
const { getAllVolunteer,addVolunteer,deleteVolunteerParticipate,getVolunteerParticipateUsers,addVolunteerParticipate,checkVolunteerParticipateExists } = require("../controller/volunteer");

const router = express.Router();

router.get("/all",getAllVolunteer)
router.post("/add",addVolunteer)
router.post("/deleteVolunteerParticipate",deleteVolunteerParticipate)
router.get("/getVolunteerParticipateUsers",getVolunteerParticipateUsers)
router.post("/addVolunteerParticipate",addVolunteerParticipate)
router.get("/checkVolunteerParticipateExists",checkVolunteerParticipateExists)

module.exports = router