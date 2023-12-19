const { conn } = require("../db/conn")


const register = async (req, res) => {
    //console.log("body = ",req.body);
    try {
        let {
            FullName,
            Address,
            MobileNumber,
            Email,
            Password,
            ConfirmPassword
        } = req.body
        console.log(`insert into users (FullName,Address,MobileNumber,Email,Password)values('${FullName}','${Address}','${MobileNumber}','${Email}','${Password}'`);
        conn.query(`insert into users (FullName,Address,MobileNumber,Email,Password)values('${FullName}','${Address}','${MobileNumber}','${Email}','${Password}')`, (err, result) => {
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

const getAllUsers = async (req, res) => {
    //console.log("body = ",req.body);
    try {
        //console.log(`insert into users (FullName,Address,MobileNumber,Email,Password)values('${FullName}','${Address}','${MobileNumber}','${Email}','${Password}'`);
        conn.query(`select * from users order by Email`, (err, result) => {
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
module.exports = { register, getAllUsers }