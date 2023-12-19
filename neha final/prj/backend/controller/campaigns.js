const { conn } = require("../db/conn")
const path = require('path')

let filename = "";

const addCampaigns = async (req, res) => {
    //console.log("body = ",req.body);
    try {
        let {
            Name,
            Description,
            Date,
            Time,
            Amount
        } = req.body
        conn.query(`insert into campaigns (Name,Description,Date,Time,Amount)values('${Name}','${Description}','${Date}','${Time}',${Amount})`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                //console.log("response = ",result)
                res.send(result)
            }
        });
    } catch (error) {
        res.send(error)
    }
    //res.send("User Added Successfully")
}

const getAllCampaigns = async (req, res) => {
    try {
        conn.query(`select * from campaigns order by Date DESC`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        });
    } catch (error) {
        res.send(error)
    }
}


const payCampaigns = async (req, res) => {
    //console.log("body = ",req.body);
    try {
        let {
            Name,
            CampID,
            Amount,
            Transaction
        } = req.body
        conn.query(`insert into campaigs_user_pay (user_email,campid,amount,transaction)values('${Name}',${CampID},${Amount},'${Transaction}')`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                //console.log("response = ",result)
                res.send(result)
            }
        });
    } catch (error) {
        res.send(error)
    }
    //res.send("User Added Successfully")
}

const updateAmount = async (req, res) => {
    try {
        let {
            CampID,
            Amount,
        } = req.body
        conn.query(`update campaigns set Paid = Paid + ${Amount} where id = ${CampID}`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                //console.log("response = ",result)
                res.send(result)
            }
        });
    } catch (error) {
        res.send(error)
    }
    //res.send("User Added Successfully")
}


const updateStatus = async (req, res) => {
    try {
        let {
            CampID,
        } = req.body
        conn.query(`update campaigns set status = 'deactive' where id = ${CampID}`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                //console.log("response = ",result)
                res.send(result)
            }
        });
    } catch (error) {
        res.send(error)
    }
    //res.send("User Added Successfully")
}


const getCampaignParticipateUsers = async (req, res) => {
    try {
        const id = req.query.id
        conn.query(`select users.*,amount,transaction,datetime from campaigs_user_pay,users where campaigs_user_pay.user_email = users.Email and campid = ${id}`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        });
    } catch (error) {
        res.send(error)
    }
}

const deleteCampaignParticipate = async (req, res) => {
    try {
        let {
            id,
        } = req.body
        conn.query(`delete from campaigs_user_pay where campid = ${id}`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                conn.query(`delete from campaigns where id = ${id}`, (err, result) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send(result)
                    }
                });
                //res.send(result)
            }
        });
    } catch (error) {
        res.send(error)
    }
}


module.exports = { addCampaigns, getAllCampaigns, deleteCampaignParticipate, payCampaigns, updateAmount, updateStatus, getCampaignParticipateUsers }