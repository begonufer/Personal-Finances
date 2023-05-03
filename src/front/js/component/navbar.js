import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Finanzas</span>
				</Link>
				<div className="ml-auto">
					<Link to="/user">
						<button className="btn btn-primary">Registrarse</button>
						
					</Link>
					<Link to="/user/login">
						<button className="btn btn-primary">Entrar</button>
						
					</Link>
				</div>
			</div>
		</nav>
	);
};
