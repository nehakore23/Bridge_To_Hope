import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import { toast } from 'react-toastify';
import AddDonation from './AddDonation';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

export const DonorUser = () => {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        const user = localStorage.getItem("user")

        getRequest(endPoints.getDonationByUser + "?user=" + user, (data) => {

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
    const [openDonationForm, setopenDonationForm] = useState(false);
    const openDonation = () => {
        setopenDonationForm(true);
    }
    return (
        <>
            <div className="content">

                {openDonationForm ? (
                    <>
                        <AddDonation />
                    </>
                ) : (
                    <>
                        <h3>
                            Donation
                            <button className='btn btn-primary' style={{ float: "right" }} onClick={() => {
                                openDonation();
                            }}>Add Donation</button>
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
                        </div></>
                )}
            </div>
        </>
    )
}