import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import ViewParticipate from './ViewParticipate';
import { AddEvent } from './AddEvent';
import { toast } from "react-toastify"

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

export const Event = () => {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);
    const [participate, setParticipate] = useState(false);


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

    const [id, setId] = useState(0);
    const viewParticipate = (id) => {
        setId(id);
        setParticipate(true)
    }
    const [eventForm, setEventForm] = useState(false);
    const addEventForm = () => {
        setEventForm(true);
    }

    const deleteData = (id) => {
        let formHeader = {
            "id": id
        }
        postRequest(endPoints.deleteEventParticipate, formHeader, (data) => {
            //console.log("data = ", data)
            if (data.affectedRows !== 0) {
                toast.success("Event Deleted successful")
                window.location.reload();
            } else {
                toast.error("Event Deleted Failed")
            }
        })
    }
    return (
        <>
            {!participate ? (<>
                <div className="content">
                 
                     {!eventForm && 
                        <>
                            <h3>
                                Events
                                <button className='btn btn-primary' style={{ float: "right" }} onClick={() => {
                                addEventForm();
                                }}>Add Event</button>
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
                                        {/* <div class="col">State</div> */}
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
                                                    {/* <div class="col" data-label="State">{data.State}</div> */}
                                                    <div class="col" data-label="City">{data.City}</div>

                                                    <div className="col d-flex flex-column ">
                                                    <div class="col" data-label="Action"><button className='btn btn-warning w-100 mb-2' onClick={() => viewParticipate(data.id)}>View</button></div>
                                                    <div class="col" data-label="Action"><button className='btn btn-danger w-100' onClick={() => deleteData(data.id)}>Delete</button></div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </>
                    }
                    {eventForm && 
                        <AddEvent/>
                    }
                </div>
            </>):(
                <>
                    <ViewParticipate state={id}/>
                </>
            )}
        </>
    )
}
