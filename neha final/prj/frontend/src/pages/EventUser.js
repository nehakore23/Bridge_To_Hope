import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import { toast } from 'react-toastify';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

export const EventUser = () => {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        getRequest(endPoints.eventAll, (data) => {

            for (let i = 0; i < data.length; i++) {
                data[i].FileName = "./images/events/" + data[i].FileName
            }
            console.log("data = ", data)
            setTableData(data)
        })
    }
    const participate = (id) => {
        //const user = localStorage.getItem("user");
        //console.log("user = ",user," id = ",id)

        let body = {
            user: localStorage.getItem("user"),
            id: id
        }

        let url = endPoints.checkEventParticipateExists + "?id=" + id + "&user=" + body.user;
        console.log("url = ", url)
        getRequest(url, (data) => {
            console.log("data = ", data)
            if (data.length > 0) {
                toast.warning("Participate Alredy Applied")
            } else {
                postRequest(endPoints.addEventParticipate, body, (data) => {
                    if (data.affectedRows !== 0) {
                        toast.success("Event Participate successful")
                    } else {
                        toast.error("Event Participate Failed")
                    }
                })
            }
        });
        /* */

    }
    return (
        <>

            <div className="content">
                <h3>
                    Events
                </h3>
                <div class="table_container">
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col">ID</div>
                            <div class="col">Event</div>
                            <div class="col">Date</div>
                            <div class="col">Time</div>
                            <div class="col">Address</div>
                            <div class="col">Poster</div>
                            <div class="col">State</div>
                            <div class="col">City</div>
                            <div class="col">Action</div>
                        </li>

                        {
                            tableData.map((data, index) => {
                                return (
                                    <li class="table-row">
                                        <div class="col" data-label="#">{index + 1}</div>
                                        <div class="col" data-label="Event">{data.Name}</div>
                                        <div class="col" data-label="Date">{formatDate(new Date(data.Date), 1)}</div>
                                        <div class="col" data-label="Time">{data.Time}</div>
                                        <div class="col" data-label="Address">{data.Address}</div>
                                        <div class="col" data-label="Poster"><img src={data.FileName} alt="" style={{ width: "80px" }} /></div>
                                        <div class="col" data-label="State">{data.State}</div>
                                        <div class="col" data-label="City">{data.City}</div>
                                        <div class="col" data-label="Action"><button className='btn btn-warning' onClick={() => participate(data.id)}>Participate</button></div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}