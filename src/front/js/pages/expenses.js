import React from "react";
import { Link } from "react-router-dom";

export const Expenses =()=>{
    return (
        <>este es el Expense carajo
            <li className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Añade un gasto</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li className="dropdown-item">
                        <Link to="/addvariableexpense">
                            <button className="btn btn-primary">Variable</button>
                        </Link>
                    </li>
                    <li className="dropdown-item">
                        <Link to="/addfixedexpense">
                            <button className="btn btn-primary">Fijo</button>
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    )
}