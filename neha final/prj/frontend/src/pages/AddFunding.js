import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import { toast } from 'react-toastify';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const AddFunding = () => {

    const nav = useNavigate();
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const [formHeader, setFormHeader] = useState({
        Name: "",
        Address: "",
        City: "",
        State: "",
        Pincode: "",
        Description: "",
        Email: localStorage.getItem("user"),
        Amount: "",
        Transaction: "",
    });
    const inputEvent = (e) => {
        const { name, value } = e.target
        setFormHeader((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    const addFundingButton = async (e) => {
        e.preventDefault();
        console.log("formheader = ", formHeader)


        postRequest(endPoints.fundingAdd, formHeader, (data) => {
            console.log("data = ", data)
            if (data.affectedRows !== 0) {
                toast.success("Funding Added successfully")
                window.location.reload();
            } else {
                toast.error("Funding Add Failed")
            }
        })
    }
    return (
        <>
            <h3>
                Add Funding
            </h3>

            <form enctype='multipart/form-data'>
                <div className='mt-3'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"> Organization Name</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Name"
                            name="Name"
                            value={formHeader.Name}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Organization Address</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Address"
                            name="Address"
                            value={formHeader.Address}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"> Organization City</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter City"
                            name="City"
                            value={formHeader.City}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"> Organization State</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter State"
                            name="State"
                            value={formHeader.State}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Pincode</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Pincode"
                            name="Pincode"
                            value={formHeader.Pincode}
                            onChange={inputEvent}
                        />
                    </div>



                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Email"
                            name="Email"
                            value={formHeader.Email}
                            onChange={inputEvent}
                            disabled
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Amount</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Amount"
                            name="Amount"
                            value={formHeader.Amount}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Transaction</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Transaction"
                            name="Transaction"
                            value={formHeader.Transaction}
                            onChange={inputEvent}
                        />
                    </div>
                    <div className='text-center mt-3'>
                        <button className='btn btn-primary me-5' style={{ width: "50%" }} onClick={addFundingButton}>Add Funding</button>
                    </div>

                </div>
            </form>

        </>
    )
}
export default AddFunding