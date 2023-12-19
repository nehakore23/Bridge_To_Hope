import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const NGORegister = (props) => {
  const nav = useNavigate();
  const [formHeader, setFormHeader] = useState({
    NGOName: "",
    RegistrationNo: "",
    PANNo: "",
    ContactNo: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  });
  const inputEvent = (e) => {
    const { name, value } = e.target
    setFormHeader((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }
  const register = () => {
    console.log("formHeader = ", formHeader);
    if (formHeader.NGOName.length === 0 || formHeader.RegistrationNo.length === 0 || formHeader.PANNo.length === 0 || formHeader.ContactNo.length === 0 || formHeader.Email.length === 0 || formHeader.Password.length === 0 || formHeader.ConfirmPassword.length === 0) {
      toast.error("Please Fill All Details")
    } else {
      if (formHeader.Password !== formHeader.ConfirmPassword) {
        toast.error("Password and Confirm Password didn't match")
      } else {
        postRequest(endPoints.ngoregister, formHeader, (data) => {
          if (data.affectedRows !== 0) {
            toast.success("Registration successful")
            props.tabswitchHandler();
          } else {
            toast.error("Registration Failed")
          }
        })
      }
    }
  }
  return (
    <>

      <div class="login_box content_wrap">
        <h3>Admin Registration</h3>
        <form>
          <div className="form-group">  <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text"
              class="form-control"
              placeholder="Enter Admin Name"
              name="NGOName"
              value={formHeader.NGOName}
              onChange={inputEvent}
            /></div>
          <div className="form-group">  <label for="exampleFormControlInput1" class="form-label"> Registration Number</label>
            <input type="text"
              class="form-control"
              placeholder="Enter Admin Registration Number"
              name="RegistrationNo"
              value={formHeader.RegistrationNo}
              onChange={inputEvent}
            /></div>
          <div className="form-group">   <label for="exampleFormControlInput1" class="form-label"> PAN No</label>
            <input type="text"
              class="form-control"
              placeholder="Enter Mobile number"
              name="PANNo"
              value={formHeader.PANNo}
              onChange={inputEvent}
            /></div>
          <div className="form-group">      <label for="exampleFormControlInput1" class="form-label">Contact No</label>
            <input type="email"
              class="form-control"
              placeholder="Enter Contact No"
              name="ContactNo"
              value={formHeader.ContactNo}
              onChange={inputEvent}
            /></div>
          <div className="form-group">    <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email"
              class="form-control"
              placeholder="Enter Email Id"
              name="Email"
              value={formHeader.Email}
              onChange={inputEvent}
            /></div>
          <div className="form-group"> <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="password"
              class="form-control"
              placeholder="Enter Password"
              name="Password"
              value={formHeader.Password}
              onChange={inputEvent}
            /></div>
          <div className="form-group">  <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
            <input type="password"
              class="form-control"
              placeholder="Enter Confirm Password"
              name="ConfirmPassword"
              value={formHeader.ConfirmPassword}
              onChange={inputEvent}
            /></div>
          <button type="submit" className="btn_nav" onClick={register}>
            Register 🆕
          </button>
        </form>
        <button onClick={props.tabswitchHandler} className="btn_nav">
          Already have account ?? Login Here 👌
        </button>
      </div>

    </>

  )
}

export default NGORegister