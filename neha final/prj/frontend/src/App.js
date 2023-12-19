import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from "react-toastify";
import UserDashboard from './pages/UserDashboard';
import NgoDashboard from './pages/NgoDashboard';
import { Event } from './pages/Event';
import { AddEvent } from './pages/AddEvent';
import { EventUser } from './pages/EventUser';
import ViewParticipate from './pages/ViewParticipate';
import Donor from './pages/Donor';
import Volunteer from './pages/Volunteer';
import NGOProfile from './pages/NGOProfile';
import AddVolunteer from './pages/AddVolunteer';
import VolunteerParticipate from './pages/VolunteerParticipate';
import { DonorUser } from './pages/DonorUser';
import { VolunteerUser } from './pages/VolunteerUser';
import AddDonation from './pages/AddDonation';
import UserProfile from './pages/UserProfile';
import RegisterLogin from './pages/register-login';
import { Press } from './pages/Press';

function App() {
  return (
    <>
      <ToastContainer position="top-right" className="custom-toast-container" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-login" element={<RegisterLogin />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/ngoDashboard" element={<NgoDashboard />} />
          <Route path="/event" element={<Event />} />
          <Route path="/eventUser" element={<EventUser />} />
          <Route path="/donorUser" element={<DonorUser />} />
          <Route path="/volunteerUser" element={<VolunteerUser />} />
          <Route path="/profileUser" element={<UserProfile />} />
          <Route path="/addevent" element={<AddEvent />} />
          <Route path="/viewparticipate" element={<ViewParticipate />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/adddonation" element={<AddDonation />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/addvolunteer" element={<AddVolunteer />} />
          <Route path="/ngoProfile" element={<NGOProfile />} />
          <Route path="/volunteerParticipate" element={<VolunteerParticipate />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </Router>
    </>
  )
}

export default App