import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import ViewParticipate from './ViewParticipate';
import { AddEvent } from './AddEvent';
import { AddCampaigns } from './AddCampaigns';
import { PayCampaigns } from './PayCampaigns';
import { toast } from 'react-toastify';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

function UserCareer() {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);
    const [participate, setParticipate] = useState(false);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        getRequest(endPoints.getAllCareer, (data) => {
            console.log("data = ", data)
            setTableData(data)
        })
    }

    const [id, setId] = useState(0);
    const applyCareer = (id) => {
        let body = {
            user: localStorage.getItem("user"),
            id: id
        }

        let url = endPoints.checkCareerParticipateExists + "?id=" + id + "&user=" + body.user;
        console.log("url = ", url)
        getRequest(url, (data) => {
            console.log("data = ", data)
            if (data.length > 0) {
                toast.warning("Participate Alredy Applied")
            } else {
                postRequest(endPoints.addCareerParticipate, body, (data) => {
                    if (data.affectedRows !== 0) {
                        toast.success("Career Participate successful")
                    } else {
                        toast.error("Career Participate Failed")
                    }
                })
            }
        });
    }
    const [eventForm, setEventForm] = useState(false);


    return (
        <>

                <div className="content">
                 
                     {!eventForm && 
                        <>
                            <h3>
                            Career
                                
                            </h3>
                            <div class="table_container">
                                <ul class="responsive-table">
                                <li class="table-header">
                                        <div class="col">#</div>
                                        <div class="col">Name</div>
                                        <div class="col">Description</div>
                                        <div class="col">Date</div>
                                        <div class="col">Time</div>
                                        <div class="col">Status</div>
                                        <div class="col">Action</div>
                                    </li>

                                    {
                                        tableData.map((data, index) => {
                                            return (
                                                <li class="table-row">
                                                    <div class="col" data-label="#">{index + 1}</div>
                                                    <div class="col" data-label="Event">{data.name}</div>
                                                    <div class="col" data-label="Event">{data.description}</div>
                                                    <div class="col" data-label="Date">{formatDate(new Date(data.date), 1)}</div>
                                                    <div class="col" data-label="Time">{data.time}</div>
                                                    <div class="col" data-label="State">{data.status}</div>
                                                    <div class="col" data-label="Action"><button className='btn btn-warning' onClick={() => applyCareer(data.id)}>Apply</button></div>
                                                </li>
                                            )
                                        })
                                    }


                                </ul>
                            </div>
                        </>
                    }
                    {eventForm && 
                        <AddCampaigns/>
                    }
                </div>
            
        </>
    )
}

export default UserCareer