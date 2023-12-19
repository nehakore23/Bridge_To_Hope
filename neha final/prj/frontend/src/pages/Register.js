import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const Register = (props) => {
  const nav = useNavigate();
  const [formHeader, setFormHeader] = useState({
    FullName: "",
    Address: "",
    MobileNumber: "",
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
    if (formHeader.FullName.length === 0 || formHeader.Address.length === 0 || formHeader.MobileNumber.length === 0 || formHeader.Email.length === 0 || formHeader.Password.length === 0 || formHeader.ConfirmPassword.length === 0) {
      toast.error("Please Fill All Details")
    } else {
      if (formHeader.Password !== formHeader.ConfirmPassword) {
        toast.error("Password and Confirm Password didn't match")
      } else {
        postRequest(endPoints.register, formHeader, (data) => {
          console.log("data = ",data)
          if (data.affectedRows !== 0) {
            toast.success("Registration successful")
            props.tabswitchHandler()
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
        <h3>User Registration</h3>
        <form>
          <div className="form-group">  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
            <input type="text"
              class="form-control"
              placeholder="Enter Full Name"
              name="FullName"
              value={formHeader.FullName}
              onChange={inputEvent}
            /></div>
          <div className="form-group">   <label for="exampleFormControlInput1" class="form-label">Address</label>
            <input type="text"
              class="form-control"
              placeholder="Enter Address"
              name="Address"
              value={formHeader.Address}
              onChange={inputEvent}
            /></div>
          <div className="form-group">  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
            <input type="number"
              class="form-control"
              placeholder="Enter Mobile number"
              name="MobileNumber"
              value={formHeader.MobileNumber}
              onChange={inputEvent}
            /></div>
          <div className="form-group">  <label for="exampleFormControlInput1" class="form-label">Email address</label>
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
          <div className="form-group"><label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
            <input type="password"
              class="form-control"
              placeholder="Enter Confirm Password"
              name="ConfirmPassword"
              value={formHeader.ConfirmPassword}
              onChange={inputEvent}
            /></div>

          <button type="button" className="btn_nav" onClick={() => register()}>
            Register 🆕
          </button>
        </form>
        <button
          onClick={props.tabswitchHandler}
          className="btn_nav"
          data-tab="login"
        >
          Already have an account? Login Here 👌
        </button>
      </div>

    </>

  )
}

export default Register