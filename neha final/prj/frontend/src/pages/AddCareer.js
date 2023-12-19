import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import FormData from "form-data"
import axios from "axios";

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

export const AddCareer = () => {
    const nav = useNavigate();
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const [formHeader, setFormHeader] = useState({
        Name: "",
        Description: "",
        Date: "",
        Time: "",
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

    const addCareerButton = async (e) => {
        e.preventDefault();
        console.log("formheader = ", formHeader)

        postRequest(endPoints.careerAdd, formHeader, (data) => {
            console.log("data = ", data)
            if (data.affectedRows !== 0) {
                toast.success("Career Added successful")
            } else {
                toast.error("Career Added Failed")
            }
        })
    }
    return (
        <>
            <h3>
                Add Career
            </h3>
            <form enctype='multipart/form-data'>
                <div className='mt-3'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Career Title Name</label>
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
                        <label for="exampleFormControlInput1" class="form-label">Posted Date</label>
                        <input type="date"
                            class="form-control"
                            placeholder="Enter Date"
                            name="Date"
                            value={formHeader.Date}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Posted Time</label>
                        <input type="time"
                            class="form-control"
                            placeholder="Enter Time"
                            name="Time"
                            value={formHeader.Time}
                            onChange={inputEvent}
                        />
                    </div>


                    <div className='text-center mt-3'>
                        <button className='btn btn-primary me-5' style={{ width: "50%" }} onClick={addCareerButton}>Add Career</button>
                    </div>

                </div>
            </form>
        </>
    )
}
