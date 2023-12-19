import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import ViewParticipate from './ViewParticipate';
import { AddEvent } from './AddEvent';
import { AddCampaigns } from './AddCampaigns';
import { PayCampaigns } from './PayCampaigns';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

function UserCampaigns() {
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
    const [amount, setAmount] = useState(0);
    const [paid, setPaid] = useState(0);
    const payCampaign = (id,amount,paid) => {
        setId(id);
        setAmount(amount);
        setPaid(paid);
        setParticipate(true)
    }
    const [eventForm, setEventForm] = useState(false);


    return (
        <>
            {!participate ? (<>
                <div className="content">
                 
                     {!eventForm && 
                        <>
                            <h3>
                                Campaigns
                                
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
                                        <div class="col">Paid</div>
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
                                                    <div class="col" data-label="Address">{data.paid}</div>
                                                    <div class="col" data-label="State">{data.status}</div>
                                                    <div class="col" data-label="Action"><button className='btn btn-warning' onClick={() => payCampaign(data.id,data.amount,data.paid)}>Pay Campaign</button></div>
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
                    <PayCampaigns state={id} amount={amount} paid={paid}/>
                </>
            )}
        </>
    )
}

export default UserCampaigns