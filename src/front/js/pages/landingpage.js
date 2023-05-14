import React from "react";
import { Navbar } from "../component/navbar";

export const LandingPage = () => {
	return (
		<>
			<div className="d-block w-100 h-100">
				<Navbar />
				<div className="bg-image justify-content-center align-items-center" id="landing">
					<div className="row">
						<div className="col-6 mt-5">
							<h1 id="land" className="text-center">CONMO</h1>
							<h3 className="land text-center">Control your money</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};