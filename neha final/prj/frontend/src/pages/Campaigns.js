import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import ViewParticipate from './ViewParticipate';
import { AddEvent } from './AddEvent';
import { AddCampaigns } from './AddCampaigns';
import ViewCampaigns from './ViewCampaigns';
import { toast } from "react-toastify"

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

function Campaigns() {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);
    const [participate, setParticipate] = useState(false);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        getRequest(endPoints.getAllCampaign, (data) => {
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
    const addCampaignsForm = () => {
        setEventForm(true);
    }

    const deleteData = (id) => {
        let formHeader = {
            "id": id
        }
        postRequest(endPoints.deleteCampaignParticipate, formHeader, (data) => {
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
                                Campaigns
                                <button className='btn btn-primary' style={{ float: "right" }} onClick={() => {
                                addCampaignsForm();
                                }}>Add Campaigns</button>
                            </h3>
                            <div class="table_container">
                                <ul class="responsive-table">
                                    <li class="table-header">
                                        <div class="col">ID</div>
                                        <div class="col">Name</div>
                                        <div class="col">Description</div>
                                        <div class="col">Date</div>
                                        <div class="col">Time</div>
                                        <div class="col">Amount</div>
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
                                                    <div class="col" data-label="Address">{data.amount}</div>
                                                    <div class="col" data-label="State">{data.status}</div>
                                                    <div className="col d-flex flex-column ">
                                                        <div class="col w-100" data-label="Job Id"><button className='btn btn-warning w-100 mb-2' onClick={() => viewParticipate(data.id)}>View </button></div>
                                                        <div class="col w-100" data-label="Job Id"><button className='btn btn-danger w-100' onClick={() => deleteData(data.id)}>Delete</button></div>
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
                        <AddCampaigns/>
                    }
                </div>
            </>):(
                <>
                    <ViewCampaigns state={id}/>
                </>
            )}
        </>
    )
}

export default Campaigns