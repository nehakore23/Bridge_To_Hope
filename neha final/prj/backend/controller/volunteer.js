const { conn } = require("../db/conn")

const getAllVolunteer = async(req,res) => {
    try{
        conn.query(`select * from volunteer order by id DESC`,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    });
    }catch(error){
        res.send(error)
    }
}

const addVolunteer = async(req,res) => {
    try{
        let{
            Name,
            Country,
            Email,
            Phone,
            Duration,
            Contribute
        } = req.body
        conn.query(`insert into volunteer (name,country,email,phone,volunteering_duration,volunteering_contribute)values('${Name}','${Country}','${Email}','${Phone}','${Duration}','${Contribute}')`,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            //console.log("response = ",result)
            res.send(result)
        }
    });
    }catch(error){
        res.send(error)
    }
    //res.send("User Added Successfully")
}

const getVolunteerParticipateUsers = async(req,res) => {
    try{
        const id = req.query.id
        conn.query(`select users.*,volunteer_participate.date from volunteer_participate,users where volunteer_participate.user = users.Email and volunteerid = ${id}`,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    });
    }catch(error){
        res.send(error)
    }
}


const addVolunteerParticipate = async(req,res) => {
    try{
        let{
            user,
            id,
        } = req.body
        conn.query(`insert into volunteer_participate (user,volunteerid) values('${user}',${id})`,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    });
    }catch(error){
        res.send(error)
    }
}

const deleteVolunteerParticipate = async (req, res) => {
    try {
        let {
            id,
        } = req.body
        conn.query(`delete from volunteer_participate where volunteerid = ${id}`, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                conn.query(`delete from volunteer where id = ${id}`, (err, result) => {
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

const checkVolunteerParticipateExists = async(req,res) => {
    try{
        //console.log("req params = ",req.query.id)
        const id = req.query.id
        const user = req.query.user
        //console.log(`select * from event_participate where user = '${user}' and eventid = ${id}`)
        conn.query(`select * from volunteer_participate where user = '${user}' and volunteerid = ${id}`,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    });
    }catch(error){
        res.send(error)
    }
}

module.exports = {getAllVolunteer,addVolunteer,deleteVolunteerParticipate,getVolunteerParticipateUsers,addVolunteerParticipate,checkVolunteerParticipateExists}