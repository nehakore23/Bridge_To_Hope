import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const ViewCareer = (props) => {
    const nav = useNavigate();
    const location = useLocation();
    const [id, setId] = useState(0);

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [id])

    const fetchData = () => {
        //console.log("id = ",location.state.id)
        if (props.state !== undefined)
            setId(props.state);
        getRequest(endPoints.getCareerParticipateUsers + "?id=" + props.state, (data) => {
            console.log("data = ", data)
            setTableData(data)
        })
    }


    return (
        <>
            <div className="content">
                <h3>
                    Participate Career User List
                </h3>
                <div class="table_container">
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div class="col">ID</div>
                            <div class="col">User</div>
                            <div class="col">Name</div>
                            <div class="col">Mobile No</div>
                            <div class="col">Apply Date</div>
                        </li>
                        {
                            tableData.map((data, index) => {
                                return (
                                    <li class="table-row">
                                        <div class="col" data-label="#">{index + 1}</div>
                                        <div class="col" data-label="#">{data.Email}</div>
                                        <div class="col" data-label="#">{data.FullName}</div>
                                        <div class="col" data-label="#">{data.MobileNumber}</div>
                                        <div class="col" data-label="#">{formatDate(new Date(data.date), 1)}</div>
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

export default ViewCareer