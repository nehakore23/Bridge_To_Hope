import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import { DonorUser } from './DonorUser';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const Funding = () => {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        getRequest(endPoints.getAllFunding, (data) => {
            console.log("data = ", data)
            setTableData(data)
        })
    }

    return (
        <>
            <div className="content">
                <h3>
                    Funding
                </h3>
                <div class="table_container">
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col">ID</div>
                            <div class="col">Name</div>
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
                        }`

                    </ul>
                </div>
            </div>
        </>
    )
}


export default Funding