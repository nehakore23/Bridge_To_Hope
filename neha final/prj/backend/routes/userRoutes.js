const express = require("express");
const { register, getAllUsers } = require("../controller/users");

const router = express.Router();

router.get("/all",getAllUsers)
router.post("/register",register)


module.exports = router