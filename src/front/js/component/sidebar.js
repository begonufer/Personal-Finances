import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Finanzas</span>
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/income">
						<button className="btn btn-primary">Ingresos</button>
					</Link>
                </li>
                <li className="dropdown">
                        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>Gastos</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li className="dropdown-item">
                               <Link to="/fixedexpense">
					    	        <button className="btn btn-primary">Gastos Fijos</button>
					            </Link>
                            </li>
                            <li className="dropdown-item">
                                <Link to="/variableexpense">
					    	        <button className="btn btn-primary">Gastos Variables</button>
					            </Link>
                            </li>
                        </ul>
                </li>
            </ul>
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Configuración</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>

	);
};



