import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../components/DateFormat';

const { getRequest, postRequest } = require("../api/apiinstance");
const { endPoints } = require("../api/constant")

const VolunteerParticipate = () => {
    const nav = useNavigate();
    const location = useLocation();
    const[id,setId] = useState(0);

    const [tableData,setTableData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[id])

    const fetchData = () => {
        //console.log("id = ",location.state.id)
        if(location.state.id !== undefined)
            setId(location.state.id);
        getRequest(endPoints.getVolunteerParticipateUsers+"?id="+location.state.id, (data)=>{
            console.log("data = ",data)
            setTableData(data)
        })
    }


  return (
    <>
        <section id="sidebar">
  <Link to="#" className="brand" >
      <i className='bx bxs-smile'></i>
      <span className="text">NGO</span>
  </Link>
  <ul className="side-menu top">
      <li >
          <Link to="/ngoDashboard" className='a'>
              <i className='bx bxs-dashboard' ></i>
              <span className="text">Dashboard</span>
          </Link>
      </li>
      <li className="active">
          <Link to="/event" className='a'>
              <i className='bx bxs-shopping-bag-alt' ></i>
              <span className="text">Event</span>
          </Link>
      </li>
      <li>
				<Link to="/donor" className='a'>
					<i className='bx bxs-doughnut-chart' ></i>
					<span className="text">Donor</span>
				</Link>
			</li>
			<li>
				<Link to="/volunteer" className='a'>
					<i className='bx bxs-message-dots' ></i>
					<span className="text">Volunteer</span>
				</Link>
			</li>
			{/* <li>
				<Link to="#" className='a'>
					<i className='bx bxs-group' ></i>
					<span className="text">Team</span>
				</Link>
			</li> */}
		</ul>
		<ul className="side-menu">
			<li>
				<Link to="/ngoProfile" className='a'>
					<i className='bx bxs-cog' ></i>
					<span className="text">Profile</span>
				</Link>
			</li>
			<li>
				<Link to="/login"  className="logout a">
					<i className='bx bxs-log-out-circle' ></i>
					<span className="text">Logout</span>
				</Link>
			</li>
		</ul>
	</section>





<section id="content">

  <nav>
  </nav>

  <main>
      <div className="head-title">
          <div className="left">
              <h1>Participate User List</h1>
          </div>
      </div>
      
    <div className='mt-5'>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">User</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Apply Date</th>                
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data,index)=>{
                    return(
                        <tr>
                            <th>{index+1}</th>
                            <td>{data.Email}</td>
                            <td>{data.FullName}</td>
                            <td>{data.MobileNumber}</td>
                            <td>{ formatDate(new Date(data.date),1)}</td>
                        </tr>
                        )
                    })
            }
            </tbody>
        </table>

       
    </div>
     
  </main>
  
</section>
    </>
  )
}

export default VolunteerParticipate