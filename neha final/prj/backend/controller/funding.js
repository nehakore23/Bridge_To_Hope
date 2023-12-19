const { conn } = require("../db/conn")
const path = require('path')

let filename = "";

const addFunding = async (req, res) => {
    //console.log("body = ",req.body);
    try {
        let {
            Name,
            Address,
            City,
            State,
            Pincode,
            Description,
            Email,
            Amount,
            Transaction,
        } = req.body
        conn.query(`insert into funding (name,address,city,state,pincode,description,email,amount,transaction)values('${Name}','${Address}','${City}','${State}','${Pincode}','${Description}','${Email}',${Amount},'${Transaction}')`, (err, result) => {
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

const getAllFundings = async (req, res) => {
    try {
        conn.query(`select * from funding order by datetime DESC`, (err, result) => {
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

const getFundingByUser = async (req, res) => {
    try {
        const email = req.query.email
        conn.query(`select * from funding where email = '${email}' order by datetime DESC`, (err, result) => {
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




module.exports = { addFunding, getAllFundings, getFundingByUser }