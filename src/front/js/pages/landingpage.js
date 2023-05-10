import React from "react";
import { Navbar } from "../component/navbar";

export const LandingPage = () => {
	return (
		<>
			<div className="d-block w-100 h-100">
				<Navbar />
				<div className="container">
					<div>
					<h1>
						€ONMO
					</h1>
					</div>
					<h2>€ONMO te ayuda a controlar tu dinero<br></br>
						 y mejorar tu vida</h2>
				</div>
			</div>

		</>
	);
};