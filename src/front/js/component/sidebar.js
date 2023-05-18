import React , {useState} from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
        <div className="sidebar col-auto col-md-3 col-xl-2 px-sm-2 px-0 h-100">
            <div className="d-flex align-content-between flex-column bd-highlight mb-3">
                <div className="mb-auto bd-highlight d-flex gap-4 flex-column align-items-center align-items-sm-start px-3 py-5 text-white w-100">
                    <Link to="/principal" className="d-flex align-middle align-items-center mb-5 w-100 text-decoration-none">
                        <span className="conmo w-100 text-center fs-1">CONMO</span>
                    </Link>
                    <Link to="/income" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-landmark"> </i> <span className="ms-1 d-none d-sm-inline">Ingresos</span>
                    </Link>
                    <Link to="/expenses" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-receipt"> </i> <span className="ms-1 d-none d-sm-inline">Gastos</span>
                    </Link>
                    <Link to="/fixedexpense" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-circle-dollar-to-slot"> </i> <span className="ms-1 d-none d-sm-inline">Fijos</span>
                    </Link>
                    <Link to="/variableexpense" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-cash-register"></i> <span className="ms-1 d-none d-sm-inline">Variables</span>
                    </Link>
                </div>
                <div className="bottomconf d-flex flex-column align-items-center align-items-sm-start px-3 py-5 text-white w-100">
                    <Link to="/user" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-gear"></i> <span className="ms-1 d-none d-sm-inline">Configuración</span>
                    </Link>
                    <Link to="/" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-right-from-bracket"></i> <span className="ms-1 d-none d-sm-inline">Sign out</span>
                    </Link>
                </div>
            </div>
        </div>
	);
};


