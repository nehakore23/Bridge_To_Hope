const { conn } = require("../db/conn")
const path = require('path')

const getAllDonations = async (req, res) => {
    try {
        conn.query(`select * from donation,users where donation.user = users.Email order by date DESC`, (err, result) => {
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

const getDonationByUser = async (req, res) => {
    const user = req.query.user
    try {
        conn.query(`select * from donation,users where donation.user = users.Email and donation.user='${user}' order by date DESC`, (err, result) => {
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

const addDonation = async (req, res) => {
    try {
        let {
            User,
            Amount,
            Date,
            TransactionId,
            PaymentType,
        } = req.body
        conn.query(`insert into donation (user,amount,date,transactionid,payment_type)values('${User}','${Amount}','${Date}','${TransactionId}','${PaymentType}')`, (err, result) => {
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

module.exports = { getAllDonations, getDonationByUser, addDonation }