const express = require("express");
const { addFunding, getAllFundings, getFundingByUser } = require("../controller/funding");

const router = express.Router();

router.get("/all",getAllFundings)
router.post("/add",addFunding)
router.get("/allbyuser",getFundingByUser)


module.exports = router