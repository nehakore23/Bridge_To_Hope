import React, { useState } from 'react'
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

function NGOLogin(props) {
  const nav = useNavigate();
  const [formHeader, setFormHeader] = useState({
    Email: "",
    Password: "",
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

  const login = (e) => {
    e.preventDefault();
    console.log("formHeader = ", formHeader);
    if (formHeader.Email.length === 0 || formHeader.Password.length === 0) {
      toast.error("Please Fill All Details")
    } else {
      getRequest(endPoints.getAllNGOs, (data) => {
        console.log("data = ", data)
        let flag = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].Email === formHeader.Email && data[i].Password === formHeader.Password) {
            flag = 1
            localStorage.setItem("user", formHeader.Email)
            nav("/ngoDashboard")
            toast.success("Login Success")
          }
        }
        if (flag === 0) {
          toast.error("Invalid Username and Password")
        }
      })
    }
  }
  return (
    <>
      <div class="login_box content_wrap">
        <h3>Admin Login</h3>
        <form>
          <div className="form-group">   <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email"
              class="form-control"
              placeholder="Enter Email Id"
              name="Email"
              value={formHeader.Email}
              onChange={inputEvent}
            /></div>
          <div className="form-group">      <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="password"
              class="form-control"
              placeholder="Enter Password"
              name="Password"
              value={formHeader.Password}
              onChange={inputEvent}
            /></div>
          <button className="btn_nav" onClick={login}>
            Login 🙋
          </button>
        </form>
        <button className="btn_nav" data-tab="register" onClick={props.tabswitchHandler}>
          Don't have an account ?? create here 👉
        </button>
      </div>

    </>

  )
}

export default NGOLogin;