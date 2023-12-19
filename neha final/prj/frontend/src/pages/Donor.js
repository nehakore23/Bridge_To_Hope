import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import { DonorUser } from './DonorUser';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const Donor = () => {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        getRequest(endPoints.donationAll, (data) => {
            console.log("data = ", data)
            setTableData(data)
        })
    }

    return (
        <>
            <div className="content">
                <h3>
                    Donation
                </h3>
                <div class="table_container">
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col">ID</div>
                            <div class="col">Date</div>
                            <div class="col">User</div>
                            <div class="col">FullName</div>
                            <div class="col">Amount</div>
                            <div class="col">Transaction Id</div>
                            <div class="col">UPI Type</div>
                        </li>

                        {
                            tableData.map((data, index) => {
                                return (
                                    <li class="table-row">
                                        <div class="col" data-label="#">{index + 1}</div>
                                        <div class="col" data-label="#">{formatDate(new Date(data.date), 1)}</div>
                                        <div class="col" data-label="#">{data.user}</div>
                                        <div class="col" data-label="#">{data.FullName}</div>
                                        <div class="col" data-label="#">{data.amount}</div>
                                        <div class="col" data-label="#">{data.transactionid}</div>
                                        <div class="col" data-label="#">{data.payment_type}</div>
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


export default Donor