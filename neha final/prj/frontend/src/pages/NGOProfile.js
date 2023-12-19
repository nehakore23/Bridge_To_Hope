import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const NGOProfile = () => {
  const nav = useNavigate();
  const [tableData, setTableData] = useState([]);
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    let newArray = [];
    getRequest(endPoints.getAllNGOs, (data) => {
      console.log("data = ", data)
      for (let i = 0; i < data.length; i++) {
        if (localStorage.getItem("user") === data[i].Email)
          newArray.push(data[i])
      }
    })
    await delay(500)
    setTableData(newArray)
  }
  


  return (
    <>
    	<div className="content">
						<h3>
							My Profile
						</h3>
          	<div class="table_container">
            <ul class="responsive-table">
								<li class="table-header">
									<div class="col">Name</div>
									<div class="col">Registration No</div>
									<div class="col">PAN No</div>
									<div class="col">ContactNo</div>
									<div class="col">Email</div>
									<div class="col">Password</div>
								</li>
                {
  tableData.map((data, index) => (
    <li class="table-row" key={index}>
      <div class="col">{data.NGOName}</div>
      <div class="col">{data.RegistrationNo}</div>
      <div class="col">{data.PANNo}</div>
      <div class="col">{data.ContactNo}</div>
      <div class="col">{data.Email}</div>
      <div class="col">{data.Password}</div>
    </li>
  ))
}

							</ul>
		        </div>
		  </div>
    </>
  )
}

export default NGOProfile