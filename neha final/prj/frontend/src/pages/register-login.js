import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

import NGOLogin from './NGOLogin';
import NGORegister from './NGORegister';
import Register from'./Register';
import Login from './Login';

function RegisterLogin() {

	const [activeTab, setActiveTab] = useState('donor');
	const [innerActiveTab, setInnerActiveTab] = useState('login');
	const handleTabChange = (event) => {
		event.preventDefault();
		setActiveTab(event.target.dataset.tab);
	};
	const handleInnerTabChange = (tab) => {
		alert(tab)
		setInnerActiveTab(tab);
	};

	return (
		<>
			<Header />
					<div className='loginContainer'>
						<div className="container">
							<ul className="nav nav-tabs">
								<li className="nav-item">
									<button className={`nav-link ${activeTab === 'donor' ? 'active' : ''}`} data-tab="donor"
										onClick={handleTabChange}>
										User									</button>
								</li>
								<li className="nav-item">
									<button className={`nav-link ${activeTab === 'ngo' ? 'active' : ''}`} data-tab="ngo"
										onClick={handleTabChange} href="#">
										Admin
									</button>
								</li>
							</ul>

							<div className="tab-content">
								{/* DONOR */}
								<div className={`tab-pane fade ${activeTab === 'donor' ? 'show active' : ''}`} id="donor">
									{innerActiveTab == 'login' ? (
										<>
											{/* <DonorLogin tabswitchHandler={() => handleInnerTabChange('register')}/> */}
											<Login tabswitchHandler={() => handleInnerTabChange('register')}/>
										</>
									) : (
										<>
											{/* <DonorRegister tabswitchHandler={() => handleInnerTabChange('login')}/> */}
											<Register tabswitchHandler={() => handleInnerTabChange('login')}/>

										</>

									)}

								</div>

								{/* NGO */}
								<div className={`tab-pane fade ${activeTab === 'ngo' ? 'show active' : ''}`} id="ngo">
									{innerActiveTab == 'login' ? (
										<>
											{/* <NgoLogin tabswitchHandler={() => handleInnerTabChange('register')} /> */}
											<NGOLogin tabswitchHandler={() => handleInnerTabChange('register')}/>
										</>
									) : (
										<>
											{/* <NgoRegister tabswitchHandler={() => handleInnerTabChange('login')} /> */}
											<NGORegister tabswitchHandler={() => handleInnerTabChange('login')}/>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
			<Footer />
		</>
	);
}

export default RegisterLogin;