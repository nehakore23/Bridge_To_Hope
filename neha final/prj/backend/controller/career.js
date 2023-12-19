const { conn } = require("../db/conn")
const path = require('path')

let filename = "";

const addCareer = async (req, res) => {
    console.log("body = ",req.body);
    try {
        let {
            Name,
            Description,
            Date,
            Time,
        } = req.body
        conn.query(`insert into career (Name,Description,Date,Time)values('${Name}','${Description}','${Date}','${Time}')`, (err, result) => {
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

const getAllCareer = async (req, res) => {
    try {
        conn.query(`select * from career order by Date DESC`, (err, result) => {
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


const addCareerParticipate = async (req, res) => {
    try {
        let {
            user,
            id,
        } = req.body
        conn.query(`insert into career_participate (user,carid) values('${user}',${id})`, (err, result) => {
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

const checkCareerParticipateExists = async (req, res) => {
    try {
        //console.log("req params = ",req.query.id)
        const id = req.query.id
        const user = req.query.user
        //console.log(`select * from event_participate where user = '${user}' and eventid = ${id}`)
        conn.query(`select * from career_participate where user = '${user}' and carid = ${id}`, (err, result) => {
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

const getCareerParticipateUsers = async (req, res) => {
    try {
        const id = req.query.id
        conn.query(`select users.*,career_participate.date from career_participate,users where career_participate.user = users.Email and carid = ${id}`, (err, result) => {
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

const deleteCareerParticipate = async (req, res) => {
    try {
        let {
            id,
        } = req.body
        conn.query(`delete from career_participate where carid = ${id}`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                conn.query(`delete from career where id = ${id}`, (err, result) => {
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

module.exports = { addCareer, getAllCareer, deleteCareerParticipate,addCareerParticipate, checkCareerParticipateExists, getCareerParticipateUsers }