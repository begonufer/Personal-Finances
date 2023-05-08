import React from "react";
import { Link } from "react-router-dom";

export const Income =()=>{
    return (
        <>
            <div className="d-block align-items-center w-100 h-100 m-5">
                <h1 className="text-center">Ingresos</h1>
                <h5 className="text-center">Resumen mensual</h5>
                    <Link to="/addincome">
                        <button className="btn btn-success rounded">Añade un ingreso</button>
                    </Link>
            </div>
        </>
    )
}