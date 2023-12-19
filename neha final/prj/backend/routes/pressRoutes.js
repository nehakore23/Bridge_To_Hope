const express = require("express");
const { createEntry,deleteEntry,getAllEntries,updateEntry } = require("../controller/press");

const router = express.Router();

router.post("/createPress",createEntry)
router.post("/deletePress",deleteEntry)
router.get("/getPress",getAllEntries)
router.post("/updatePress",updateEntry)


module.exports = router