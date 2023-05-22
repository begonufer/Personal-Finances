import React from "react";
import { Link } from "react-router-dom";

export const VariableExpense =()=>{
    return (
        <>
            <div className="d-block w-100 h-100 m-5 align-items-center">
                <h1 className="text-center">Gastos variables</h1>
                <h5 className="text-center">Resumen mensual</h5>
                <div className="d-block w-100 h-100 m-5 align-items-center">
                    <Link to="/totalincomes" className="totalizacion text-center shadow align-middle align-items-center text-decoration-none w-50">
                        <h2 className="d-none d-sm-inline">Resumen de gastos</h2>
                    </Link>
                </div>
                <Link to="/addvariableexpense">
                    <button type="button" className="btn btn-circle btn-xl"> <i className="fa-solid fa-plus"></i> </button>
                </Link>
            </div>
        </>
    )
}