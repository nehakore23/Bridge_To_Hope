const express = require("express");
const { addCampaigns, getAllCampaigns, deleteCampaignParticipate,payCampaigns, updateAmount, updateStatus, getCampaignParticipateUsers } = require("../controller/campaigns");

const router = express.Router();

router.get("/all",getAllCampaigns)
router.post("/add",addCampaigns)
router.post("/payAmount",payCampaigns)
router.post("/updateAmount",updateAmount)
router.post("/updateStatus",updateStatus)
router.post("/deleteCampaignParticipate",deleteCampaignParticipate)

router.get("/getCampaignParticipateUsers",getCampaignParticipateUsers)


module.exports = router