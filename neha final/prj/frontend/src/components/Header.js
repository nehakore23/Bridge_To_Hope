import { Link } from 'react-router-dom';
import logo from '../assets/logo-transparent.png'
function Header(props) {
	return (
		<header>
			{!props.isDashboard ? (
				<>
					<div class="container">
						<div class="row">
							<div class="col-2 col_logo">
								<img src={logo} alt="" />
							</div>
							<div class="col-10 col_menu my-auto">
								<ul>
									<li><a href="/">Home</a></li>
									<li><a href="/press">Media</a></li>

									<br />
									<li class="btn"><a href="/register-login">Login</a></li>
									<li class="btn"><a href="/register-login">Signup</a></li>
								</ul>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className='container-fluid'>
					<div className="row">
						<div className="col-lg-6 text-left">
							<img src={logo} alt="" width={120} />
						</div>
						<div className="col-lg-6 col_logout my-auto justify-content-end d-flex">
							<Link to="/register-login" className="button2">
								Logout
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
