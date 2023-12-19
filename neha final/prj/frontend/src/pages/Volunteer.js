import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';
import ViewParticipate from './ViewParticipate';
import AddVolunteer from './AddVolunteer';
import { toast } from "react-toastify"

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const Volunteer = () => {
  const nav = useNavigate();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    getRequest(endPoints.volunteerAll, (data) => {
      console.log("data = ", data)
      setTableData(data)
    })
  }

  const [participate, setParticipate] = useState(false)
  const [id, setId] = useState(0);
  const viewParticipate = (id) => {
    setId(id);
    setParticipate(true)
  }

  const [eventForm, setEventForm] = useState(false);
  const addEventForm = () => {
    setEventForm(true);
  }

  const deleteData = (id) => {
    let formHeader = {
      "id": id
    }
    postRequest(endPoints.deleteVolunteerParticipate, formHeader, (data) => {
      //console.log("data = ", data)
      if (data.affectedRows !== 0) {
        toast.success("Event Deleted successful")
        window.location.reload();
      } else {
        toast.error("Event Deleted Failed")
      }
    })
  }
  return (
    <>

      {participate ? (<>
        <ViewParticipate state={id} />
      </>) : (
        <>
          <div className="content">
            {!eventForm &&
              <>
                <h3>Volunteers
                  <button className='btn btn-primary' style={{ float: "right" }} onClick={() => {
                    addEventForm();
                  }}>Add Volunteer</button>
                </h3>

                <div class="table_container">

                  <ul class="responsive-table">
                    <li class="table-header">
                      <div class="col">ID</div>
                      <div class="col">Name</div>
                      <div class="col">Country</div>
                      <div class="col">Email</div>
                      <div class="col">Phone</div>
                      <div class="col">Volunteering Duration</div>
                      <div class="col">Volunteering Contribute</div>
                      <div class="col">Action</div>
                     
                    </li>
                    {
                      tableData.map((data, index) => {
                        return (
                          <li class="table-row">
                            <div class="col" data-label="Job Id">{index + 1}</div>
                            <div class="col" data-label="Job Id">{data.name}</div>
                            <div class="col" data-label="Job Id">{data.country}</div>
                            <div class="col" data-label="Job Id">{data.email}</div>
                            <div class="col" data-label="Job Id">{data.phone}</div>
                            <div class="col" data-label="Job Id">{data.volunteering_duration}</div>
                            <div class="col" data-label="Job Id">{data.volunteering_contribute}</div>
                            <div className="col d-flex flex-column ">
                              <div class="col w-100" data-label="Job Id"><button className='btn btn-warning w-100 mb-2' onClick={() => viewParticipate(data.id)}>View </button></div>
                              <div class="col w-100" data-label="Job Id"><button className='btn btn-danger w-100' onClick={() => deleteData(data.id)}>Delete</button></div>
                            </div>
                          </li>
                        )
                      })
                    }

                  </ul>
                </div>
              </>

            }
            {eventForm &&
              <>
                <h3>Add Volunteers
                </h3>
                <AddVolunteer />
              </>
            }
          </div>
        </>
      )}

    </>
  )
}

export default Volunteer