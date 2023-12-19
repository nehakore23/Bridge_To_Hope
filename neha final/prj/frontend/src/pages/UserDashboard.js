import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChart, Bar, AreaChart, Area, Legend } from 'recharts';
import wiredGif from '../assets/wired-outline-268-avatar-man.gif'
import Admin from '../assets/wired-outline-981-consultation.gif';
import UserProfile from './UserProfile';
import { EventUser } from './EventUser';
import { DonorUser } from './DonorUser';
import UserCampaigns from './UserCampaigns';
import UserFunding from './UserFunding';
import UserCareer from './UserCareer';
import { VolunteerUser } from './VolunteerUser';

const data = [
	{ "name": "Page 0", "uv": 625, "pv": 2500, "amt": 2500 },
	{ "name": "Page 1", "uv": 243, "pv": 972, "amt": 972 },
	{ "name": "Page 2", "uv": 987, "pv": 3948, "amt": 3948 },
	{ "name": "Page 3", "uv": 542, "pv": 2168, "amt": 2168 },
	{ "name": "Page 4", "uv": 326, "pv": 1304, "amt": 1304 },
	{ "name": "Page 5", "uv": 814, "pv": 3256, "amt": 3256 },
	{ "name": "Page 6", "uv": 207, "pv": 828, "amt": 828 },
	{ "name": "Page 7", "uv": 463, "pv": 1852, "amt": 1852 },
	{ "name": "Page 8", "uv": 759, "pv": 3036, "amt": 3036 },
	{ "name": "Page 9", "uv": 88, "pv": 352, "amt": 352 }
]

function UserDashboard() {
	const [activeTab, setActiveTab] = useState('ngoDashboard'); // Initial active tab

	const tabs = [
		{ id: 'ngoDashboard', label: 'Dashboard' },
		{ id: 'Event', label: 'Event' },
		{ id: 'Donor', label: 'Donor' },
		{ id: 'Volunteer', label: 'Volunteer' },
		{ id: 'Campaigns', label: 'Campaigns' },
		{ id: 'Funding', label: 'Funding' },
		{ id: 'Career', label: 'Career' },
		{ id: 'Profile', label: 'Profile' },
	];

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<>
			<Header isDashboard={true} />
			<div className="dashboard-container">
				<div className="left-menu">
					<div className="user">
						<img src={wiredGif} alt="GIF" />
					</div>
					{tabs.map((tab) => (
						<div
							key={tab.id}
							className={`menu-item ${activeTab === tab.id ? 'active' : ''}`}
							onClick={() => handleTabClick(tab.id)}
						>
							{tab.label}
						</div>
					))}
				</div>
				{activeTab === 'ngoDashboard' &&
					<div className="content">
						<h3>
							USER DASHBOARD
						</h3>
						<h3>
							Welcome To Bridge To Hope
						</h3>
					</div>
				}
				{activeTab === 'Donor' &&
					<DonorUser />
				}
				{activeTab === 'Volunteer' &&
					<VolunteerUser />
				}
				{activeTab === 'Event' &&
					<EventUser />
				}
				{activeTab === 'Campaigns' &&
					<UserCampaigns />
				}
				{activeTab === 'Funding' &&
					<UserFunding />
				}
				{activeTab === 'Career' &&
					<UserCareer />
				}
				{activeTab === 'Profile' &&
					<UserProfile />
				}
			</div>
			<Footer />
		</>
	);
}
export default UserDashboard;
