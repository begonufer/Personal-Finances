import React from "react";
import { Link } from "react-router-dom";

export const Income =()=>{
    return (
        <>este es el Income carajo
            <Link to="/addincome">
                <button className="btn btn-primary">Añade un ingreso</button>
            </Link>
        </>
    )
}