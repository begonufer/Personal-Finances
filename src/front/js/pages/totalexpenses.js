import React from "react";
import { Link } from "react-router-dom";
export const Totalexpenses =()=>{
    return (
        <>
        <div className="wrap flex-column   w-100  m-3">
            <div>
            <h1 className="text-center">Resumen</h1>
                </div>
        <div className="d-flex  justify-content-center">
            <div>
            <Link to="/fixedexpense">
                        <button className="btn btn-success rounded ">Gastos Fijos</button>
                    </Link>
                <Link to="/variableexpense">
                        <button className="btn btn-success rounded">Gastos Variables</button>
                    </Link>
            </div>
            </div>
        </div>
        
        
        </>
    )
}