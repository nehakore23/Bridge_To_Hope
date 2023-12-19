import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import { toast } from "react-toastify"

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const AddVolunteer = () => {
    const nav = useNavigate();
    const delay = (ms) => new Promise((res) => setTimeout(res,ms));

    const [formHeader,setFormHeader] = useState({
        Name : "",
        Country:"",
        Email:"",
        Phone:"",
        Duration:"",
        Contribute:""
    });
    const inputEvent = (e) => {
        const {name,value} = e.target;
        setFormHeader((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }
        })
    }

    const addVolunteerButton = (e) => {
        e.preventDefault();
        console.log("formheader = ",formHeader)
        postRequest(endPoints.volunteerAdd, formHeader, (data)=>{
            //console.log("data = ",data)
            if(data.affectedRows !== 0 ){
                toast.success("Volunteer Add successful")
                window.location.reload();
            }else{
                toast.error("Volunteer Add Failed")
            }
        })
    }
  return (
    <>
      <form enctype='multipart/form-data'>
      <div className='mt-3'>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" 
                  class="form-control"  
                  placeholder="Enter Name" 
                  name="Name"
                  value={formHeader.Name}
                  onChange={inputEvent}
                  />
          </div>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Country</label>
              <input type="text" 
                  class="form-control"  
                  placeholder="Enter Country" 
                  name="Country"
                  value={formHeader.Country}
                  onChange={inputEvent}
                  />
          </div>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input type="email" 
                  class="form-control"  
                  placeholder="Enter Email" 
                  name="Email"
                  value={formHeader.Email}
                  onChange={inputEvent}
                  />
          </div>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone</label>
              <input type="text" 
                  class="form-control"  
                  placeholder="Enter Phone" 
                  name="Phone"
                  value={formHeader.Phone}
                  onChange={inputEvent}
                  />
          </div>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Volunteering Duration</label>
              <input type="text" 
                  class="form-control"  
                  placeholder="Enter Volunteering Duration" 
                  name="Duration"
                  value={formHeader.Duration}
                  onChange={inputEvent}
                  />
          </div>

          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Volunteering Contribute</label>
              <input type="text" 
                  class="form-control"  
                  placeholder="Enter Volunteering Contribute" 
                  name="Contribute"
                  value={formHeader.Contribute}
                    onChange={inputEvent}
                  />
          </div>
          
          <div className='text-center mt-3'>
            <button className='btn btn-primary me-5' style={{width:"50%"}} onClick={addVolunteerButton}>Add Volunteer</button>
        </div>
        
      </div>
      </form>
    </>
  )
  }
  

export default AddVolunteer