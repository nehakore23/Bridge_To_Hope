import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import FormData from "form-data"
import axios from "axios";

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

export const PayCampaigns = (props) => {
    const nav = useNavigate();
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const [formHeader, setFormHeader] = useState({
        Name: localStorage.getItem("user"),
        CampID: props.state,
        Amount: "",
        Transaction:""
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

    const payAmountButton = async (e) => {
        e.preventDefault();
        console.log("formheader = ", formHeader)
        console.log("props = ", props)

        if(parseFloat(formHeader.Amount) + parseFloat(props.paid) > parseFloat(props.amount) ){
            console.log("if")
            toast.error("Amount is more than expected")
        }
        else
        if(parseFloat(formHeader.Amount) + parseFloat(props.paid) == parseFloat(props.amount) ){
            postRequest(endPoints.campaignPayAmount, formHeader, (data) => {
                //console.log("data = ", data)
                if (data.affectedRows !== 0) {
                    postRequest(endPoints.campaignUpdateAmount, formHeader, (data) => {
                        //console.log("data = ", data)
                        if (data.affectedRows !== 0) {  
                            toast.success("Amount Paid successful")
                        } else {
                            toast.error("Amount Added Failed")
                        }
                    })
                    //toast.success("Campaigns Added successful")
                } else {
                    toast.error("Amount Added Failed")
                }
            })    
            postRequest(endPoints.campaignUpdateStatus, formHeader, (data) => {
                //console.log("data = ", data)
                if (data.affectedRows !== 0) {  
                    //toast.success("Amount Paid successful")
                } else {
                    //toast.error("Amount Added Failed")
                }
            })
        }
        else{
            console.log("else")
            postRequest(endPoints.campaignPayAmount, formHeader, (data) => {
                console.log("data = ", data)
                if (data.affectedRows !== 0) {
                    postRequest(endPoints.campaignUpdateAmount, formHeader, (data) => {
                        console.log("data = ", data)
                        if (data.affectedRows !== 0) {  
                            toast.success("Amount Paid successful")
                        } else {
                            toast.error("Amount Added Failed")
                        }
                    })
                    //toast.success("Campaigns Added successful")
                } else {
                    toast.error("Amount Added Failed")
                }
            })    
        }
    }
    return (
        <>
            <h3>
                Pay Campaigns
            </h3>
            <form>
                <div className='mt-3'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">User Email</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Name"
                            name="Name"
                            value={formHeader.Name}
                            onChange={inputEvent}
                            disabled
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Campaign ID</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter CampID"
                            name="CampID"
                            value={formHeader.CampID}
                            onChange={inputEvent}
                            disabled
                        />
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Pay Campaign Amount</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Amount"
                            name="Amount"
                            value={formHeader.Amount}
                            onChange={inputEvent}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Trasaction Details</label>
                        <input type="text"
                            class="form-control"
                            placeholder="Enter Transaction"
                            name="Transaction"
                            value={formHeader.Transaction}
                            onChange={inputEvent}
                        />
                    </div>
                    
                    <div className='text-center mt-3'>
                        <button className='btn btn-primary me-5' style={{ width: "50%" }} onClick={payAmountButton}>Pay Amount</button>
                    </div>

                </div>
            </form>
        </>
    )
}
