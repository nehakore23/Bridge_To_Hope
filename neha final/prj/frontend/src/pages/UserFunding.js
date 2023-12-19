import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import ViewParticipate from './ViewParticipate';
import { AddEvent } from './AddEvent';
import { AddCampaigns } from './AddCampaigns';
import { PayCampaigns } from './PayCampaigns';
import AddFunding from './AddFunding';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

function UserFunding() {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);
    const [participate, setParticipate] = useState(false);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        let url = endPoints.getFundingByUser + "?email=" + localStorage.getItem("user");
        getRequest(url, (data) => {
            console.log("data = ", data)
            setTableData(data)
        })
    }

    const [id, setId] = useState(0);
    const [amount, setAmount] = useState(0);
    const [paid, setPaid] = useState(0);
    const payCampaign = (id, amount, paid) => {
        setId(id);
        setAmount(amount);
        setPaid(paid);
        setParticipate(true)
    }
    const [eventForm, setEventForm] = useState(false);
    const addFund = () => {
        setEventForm(true);
    }

    return (
        <>
            {!participate ? (<>
                <div className="content">

                    {!eventForm &&
                        <>
                            <h3>
                                My Funding
                                <button className='btn btn-primary' style={{ float: "right" }} onClick={() => {
                                    addFund();
                                }}>Add Fund</button>
                            </h3>
                            <div class="table_container">
                                <ul class="responsive-table">
                                    <li class="table-header">
                                        <div class="col">ID</div>
                                        <div class="col"> Org Name</div>
                                        <div class="col">City</div>
                                        <div class="col">Email</div>
                                        <div class="col">Amount</div>
                                        <div class="col">Transaction</div>
                                        <div class="col">DateTime</div>
                                    </li>

                                    {
                                        tableData.map((data, index) => {
                                            return (
                                                <li class="table-row">
                                                    <div class="col" data-label="#">{index + 1}</div>
                                                    <div class="col" data-label="Event">{data.name}</div>
                                                    <div class="col" data-label="Event">{data.city}</div>
                                                    <div class="col" data-label="Time">{data.email}</div>
                                                    <div class="col" data-label="Address">{data.amount}</div>
                                                    <div class="col" data-label="Address">{data.transaction}</div>
                                                    <div class="col" data-label="State">{data.datetime}</div>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </>
                    }
                    {eventForm &&
                        <AddFunding />
                    }
                </div>
            </>) : (
                <>
                    <PayCampaigns state={id} amount={amount} paid={paid} />
                </>
            )}
        </>
    )
}

export default UserFunding