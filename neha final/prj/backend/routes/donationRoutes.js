const express = require("express");
const { getAllDonations, getDonationByUser,addDonation } = require("../controller/donation");

const router = express.Router();

router.get("/all",getAllDonations)
router.get("/byUser",getDonationByUser)
router.post("/add",addDonation)


module.exports = router