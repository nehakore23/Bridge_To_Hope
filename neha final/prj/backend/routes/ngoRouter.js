const express = require("express");
const { register, getAllNGOs } = require("../controller/ngo");

const router = express.Router();

router.get("/all",getAllNGOs)
router.post("/register",register)


module.exports = router