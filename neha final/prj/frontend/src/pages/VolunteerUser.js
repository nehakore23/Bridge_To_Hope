import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import { toast } from 'react-toastify';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

export const VolunteerUser = () => {
    const nav = useNavigate();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        getRequest(endPoints.volunteerAll, (data) => {
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

        let url = endPoints.checkVolunteerParticipateExists + "?id=" + id + "&user=" + body.user;
        //console.log("url = ",url)
        getRequest(url, (data) => {
            //console.log("data = ",data)
            if (data.length > 0) {
                toast.warning("Participate Alredy Applied")
            } else {
                postRequest(endPoints.addVolunteerParticipate, body, (data) => {
                    if (data.affectedRows !== 0) {
                        toast.success("Volunteer Participate successful")
                    } else {
                        toast.error("Volunteer Participate Failed")
                    }
                })
            }
        });
    }
    return (
        <>

            <div className="content">
                <h3>Volunteer</h3>
                <div class="table_container">
                    <ul class="responsive-table">
                        <li class="table-header">
                            <div className='col'>ID</div>
                            <div className='col'>Name</div>
                            <div className='col'>Country</div>
                            <div className='col'>Email</div>
                            <div className='col'>Phone</div>
                            <div className='col'>Volunteering Duration</div>
                            <div className='col'>Volunteering Contribute</div>
                            <div className='col'>Action</div>
                        </li>

                        {
                            tableData.map((data, index) => {
                                return (
                                    <li className="table-row">
                                        <div className="col" data-label="#">{index + 1}</div>
                                        <div className='col'>{data.name}</div>
                                        <div className='col'>{data.country}</div>
                                        <div className='col'>{data.email}</div>
                                        <div className='col'>{data.phone}</div>
                                        <div className='col'>{data.volunteering_duration}</div>
                                        <div className='col'>{data.volunteering_contribute}</div>
                                        <div className='col'><button className='btn btn-warning' onClick={() => participate(data.id)}>Participate</button></div>
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