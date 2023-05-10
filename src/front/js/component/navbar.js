import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar  ">
			
			<div className="d-flex justify-content-between w-100">
				<div className="">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">€ONMO</span>
					</Link>
						</div>	
					<div>
						<Link to="/signup">
							<button className="btn btn-light">Registrarse</button>
						</Link>

						<Link to="/login">
						 	<button className="btn btn-light">Iniciar Sección</button>
						</Link>
							</div>
				
					
					</div>
				
			
		</nav>
	);
};