const { conn } = require("../db/conn")
const path = require('path')

let filename = "";

const addEvent = async (req, res) => {
    //console.log("body = ",req.body);
    try {
        let {
            Name,
            Description,
            Date,
            Time,
            Address,
            File,
            FileName,
            State,
            City
        } = req.body
        //console.log(`insert into users (FullName,Address,MobileNumber,Email,Password)values('${FullName}','${Address}','${MobileNumber}','${Email}','${Password}'`);
        conn.query(`insert into event (Name,Description,Date,Time,Address,FileName,State,City)values('${Name}','${Description}','${Date}','${Time}','${Address}','${filename}','${State}','${City}')`, (err, result) => {
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

const getAllEvent = async (req, res) => {
    try {
        conn.query(`select * from event order by Date DESC`, (err, result) => {
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

const upload = async (req, res) => {
    //console.log("res = ",req)
    try {
        //const newpath = __dirname + "\\events\\";
        //const newpath = __dirname + "../../";
        const file = req.files.File;
        filename = file.name;
        console.log("new path = ", path.join(__dirname, '../../', 'frontend', 'public', 'images', 'events', filename))
        //console.log("path = ",`${newpath}${filename}`)
        //console.log("body = ",req.body)
        //console.log("file = ",req.files.File)
        //console.log("file Name= ",filename)
        file.mv(path.join(__dirname, '../../', 'frontend', 'public', 'images', 'events', filename), (err) => {
            if (err) {
                //res.status(500).send({ message: "File upload failed", code: 200 });
                res.send({ message: "File Upload Failed" })
            }
            //res.status(200).send({ message: "File Uploaded", code: 200 });
            res.send({ message: "File Uploaded" })
        });
        //res.send({})
    } catch (error) {
        console.log("Error = ", error)
        res.send(error)
    }
}


const addEventParticipate = async (req, res) => {
    try {
        let {
            user,
            id,
        } = req.body
        conn.query(`insert into event_participate (user,eventid) values('${user}',${id})`, (err, result) => {
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

const deleteEventParticipate = async (req, res) => {
    try {
        let {
            id,
        } = req.body
        conn.query(`delete from event_participate where eventid = ${id}`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                conn.query(`delete from event where id = ${id}`, (err, result) => {
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
const checkEventParticipateExists = async (req, res) => {
    try {
        //console.log("req params = ",req.query.id)
        const id = req.query.id
        const user = req.query.user
        //console.log(`select * from event_participate where user = '${user}' and eventid = ${id}`)
        conn.query(`select * from event_participate where user = '${user}' and eventid = ${id}`, (err, result) => {
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

const getEventParticipateUsers = async (req, res) => {
    try {
        const id = req.query.id
        conn.query(`select users.*,event_participate.date from event_participate,users where event_participate.user = users.Email and eventid = ${id}`, (err, result) => {
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

module.exports = { addEvent, getAllEvent, upload, addEventParticipate, deleteEventParticipate, checkEventParticipateExists, getEventParticipateUsers }