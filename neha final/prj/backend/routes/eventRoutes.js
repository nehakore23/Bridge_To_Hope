const express = require("express");
const { getAllEvent, addEvent, upload,addEventParticipate,deleteEventParticipate,checkEventParticipateExists,getEventParticipateUsers } = require("../controller/event");

const router = express.Router();

router.get("/all",getAllEvent)
router.post("/add",addEvent)
router.post("/upload",upload)
router.post("/addEventParticipate",addEventParticipate)
router.post("/deleteEventParticipate",deleteEventParticipate)
router.get("/checkEventParticipateExists",checkEventParticipateExists)
router.get("/getEventParticipateUsers",getEventParticipateUsers)


module.exports = router