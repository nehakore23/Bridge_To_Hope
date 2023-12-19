import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import FormData from "form-data"
import axios from "axios";

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

export const AddCampaigns = () => {
    const nav = useNavigate();
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const [formHeader, setFormHeader] = useState({
        Name: "",
        Description: "",
        Date: "",
        Time: "",
        Amount: "",
    });
    const inputEvent = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormHeader((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    const addEventButton = async (e) => {
        e.preventDefault();
        console.log("formheader = ", formHeader)

        postRequest(endPoints.campaignAdd, formHeader, (data) => {
            console.log("data = ", data)
            if (data.affectedRows !== 0) {
                toast.success("Campaigns Added successful")
            } else {
                toast.error("Campaigns Added Failed")
            }
        })
    }
    return (
        <>
            <h3>
                Add Campaigns
            </h3>
            <form enctype='multipart/form-data'>
                <div className='mt-3'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Campaigns Name</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Name"
                            name="Name"
                            value={formHeader.Name}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Description</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Description"
                            name="Description"
                            value={formHeader.Description}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Date</label>
                        <input type="date"
                            class="form-control"
                            placeholder="Enter Date"
                            name="Date"
                            value={formHeader.Date}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Time</label>
                        <input type="time"
                            class="form-control"
                            placeholder="Enter Time"
                            name="Time"
                            value={formHeader.Time}
                            onChange={inputEvent}
                        />
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Campaign Amount</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Amount"
                            name="Amount"
                            value={formHeader.Amount}
                            onChange={inputEvent}
                        />
                    </div>
                    
                    <div className='text-center mt-3'>
                        <button className='btn btn-primary me-5' style={{ width: "50%" }} onClick={addEventButton}>Add Campaign</button>
                    </div>

                </div>
            </form>
        </>
    )
}
