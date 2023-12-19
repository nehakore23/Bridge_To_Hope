import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import { toast } from 'react-toastify';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const AddDonation = () => {

    const nav = useNavigate();
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const [formHeader, setFormHeader] = useState({
        User: localStorage.getItem("user"),
        Amount: "",
        Date: "",
        TransactionId: "",
        PaymentType: "",
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

    const addDonationButton = async (e) => {
        e.preventDefault();
        console.log("formheader = ", formHeader)


        postRequest(endPoints.addDonation, formHeader, (data) => {
            console.log("data = ", data)
            if (data.affectedRows !== 0) {
                toast.success("Donation Added successfully")
                window.location.reload();
            } else {
                toast.error("Event Add Failed")
            }
        })
    }
    return (
        <>
            <h3>
                Add Donation
            </h3>

            <form enctype='multipart/form-data'>
                <div className='mt-3'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">User</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter User"
                            name="User"
                            value={formHeader.User}
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
                        <label for="exampleFormControlInput1" class="form-label">Transaction Id</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter TransactionId"
                            name="TransactionId"
                            value={formHeader.TransactionId}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">UPI Type</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter PaymentType"
                            name="PaymentType"
                            value={formHeader.PaymentType}
                            onChange={inputEvent}
                        />
                    </div>

                    <div className='text-center mt-3'>
                        <button className='btn btn-primary me-5' style={{ width: "50%" }} onClick={addDonationButton}>Add Donation</button>
                    </div>

                </div>
            </form>

        </>
    )
}
export default AddDonation