import React , {useState} from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
        <div className="sidebar col-auto col-md-3 col-xl-2 px-sm-2 px-0 h-100">
            <div className="d-flex align-content-between flex-column bd-highlight mb-3">
                <div className="mb-auto bd-highlight d-flex gap-4 flex-column align-items-center align-items-sm-start px-3 py-5 text-white w-100">
                    <a href="/principal" className="d-flex align-middle align-items-center mb-5 w-100 text-decoration-none">
                        <span className="conmo w-100 text-center fs-1">CONMO</span>
                    </a>
                    <a href="/income" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-landmark"> </i> <span className="ms-1 d-none d-sm-inline">Ingresos</span>
                    </a>
                    <a href="/expenses" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-receipt"> </i> <span className="ms-1 d-none d-sm-inline">Gastos</span>
                    </a>
                    <a href="/fixedexpense" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-circle-dollar-to-slot"> </i> <span className="ms-1 d-none d-sm-inline">Fijos</span>
                    </a>
                    <a href="/variableexpense" className="align-middle px-4 text-decoration-none">
                        <i className="fa-solid fa-cash-register"></i> <span className="ms-1 d-none d-sm-inline">Variables</span>
                    </a>
                </div>
                <div className="bottomconf d-flex flex-column align-items-center align-items-sm-start px-3 py-5 text-white w-100">
                    <a href="/user" className="align-middle px-4 text-decoration-none">
                        <i class="fa-solid fa-gear"></i> <span className="ms-1 d-none d-sm-inline">Configuración</span>
                    </a>
                    <a href="/" className="align-middle px-4 text-decoration-none">
                        <i class="fa-solid fa-right-from-bracket"></i> <span className="ms-1 d-none d-sm-inline">Sign out</span>
                    </a>
                </div>
            </div>
        </div>
	);
};

