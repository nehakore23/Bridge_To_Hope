import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import FormData from "form-data"
import axios from "axios";

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

export const AddEvent = () => {
    const nav = useNavigate();
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const [formHeader, setFormHeader] = useState({
        Name: "",
        Description: "",
        Date: "",
        Time: "",
        Address: "",
        File: "",
        FileName: "",
        State: "",
        City: ""
    });
    const inputEvent = (e) => {
        //console.log("e = ",e)
        const name = e.target.name
        const value = name === 'File' ? e.target.files[0] : e.target.value
        const fileName = name === 'File' ? e.target.files[0].name : ""
        //console.log("name = ",name)
        //console.log("value = ",value)
        /*const name = e.target.name
        const value = name === 'File' ? "" : e.target.value;*/

        setFormHeader((preValue) => {
            return {
                ...preValue,
                [name]: value,
                FileName: fileName
            }
        })
    }

    const addEventButton = async (e) => {
        e.preventDefault();
        console.log("formheader = ", formHeader)

        //upload file
        await axios.post(endPoints.eventUpload, formHeader, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(res => {
                console.log("res = ", res)
            })

        await delay(500);
        postRequest(endPoints.eventAdd, formHeader, (data) => {
            console.log("data = ", data)
            if (data.affectedRows !== 0) {
                toast.success("Event Add successful")
            } else {
                toast.error("Event Add Failed")
            }
        })
    }
    return (
        <>
            <h3>
                Add Event
            </h3>
            <form enctype='multipart/form-data'>
                <div className='mt-3'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Event Name</label>
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
                        <label for="exampleFormControlInput1" class="form-label">Address</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Address"
                            name="Address"
                            value={formHeader.Address}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Poster</label>
                        <input type="file"
                            class="form-control"
                            placeholder="Select File"
                            name="File"
                            //value={formHeader.File}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">State</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter State"
                            name="State"
                            value={formHeader.State}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">City</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter City"
                            name="City"
                            value={formHeader.City}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className='text-center mt-3'>
                        <button className='btn btn-primary me-5' style={{ width: "50%" }} onClick={addEventButton}>Add Event</button>
                    </div>

                </div>
            </form>
        </>
    )
}
