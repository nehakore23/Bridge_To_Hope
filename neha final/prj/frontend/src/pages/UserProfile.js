import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import { toast } from 'react-toastify';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const UserProfile = () => {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        let newArray = [];
        getRequest(endPoints.getAllUsers, (data) => {
            console.log("data = ", data)
            for (let i = 0; i < data.length; i++) {
                if (localStorage.getItem("user") === data[i].Email)
                    newArray.push(data[i])
                //setTableData(data)
            }
        })
        await delay(500)
        setTableData(newArray)
    }
    return (
        <>
            <div className="content">
                <h3>
                    User Details
                </h3>
                <div class="table_container">
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col">ID</div>
                            <div class="col">Name</div>
                            <div class="col">Address</div>
                            <div class="col">Mobile Number</div>
                            <div class="col">Email</div>
                            <div class="col">Password</div>
                        </li>
                        {
                            tableData.map((data, index) => (
                                <li class="table-row" key={index}>
                                    <div class="col">{index + 1}</div>
                                    <div class="col">{data.FullName}</div>
                                    <div class="col">{data.Address}</div>
                                    <div class="col">{data.MobileNumber}</div>
                                    <div class="col">{data.Email}</div>
                                    <div class="col">{data.Password}</div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserProfile