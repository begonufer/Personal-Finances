import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { format } from "date-fns";

export const Totalincomes = () => {
    const { store, actions } = useContext(Context);
    const [incomes, setIncomes] = useState([]);
    useEffect(() => {
        async function transformData() {
            await actions.getIncomes();
            const data = store.incomes.map((income) => ({ ...income, dateTime: format(new Date(income.dateTime), 'dd/MM/yyyy' )}))
            setIncomes(data);
        }
        transformData();
    }, [])
    return (
        <>
            <div id="login" className="w-100 h-100">
                <div className="row">
                    <h1 className="text-center text-white p-5" id="fondoizq">Resumen de ingresos</h1>
                </div>
                <div className="wrap flex-column w-100 m-3">
                    <div className="row justify-content-center align-items-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Importe</th>
                                </tr>
                            </thead>
                            <tbody>
                                {incomes.map(({value, incomecategory, dateTime}, index) => (  
                                    <tr key={index}>
                                        <td scope="col">{dateTime}</td>
                                        <td scope="col">{incomecategory.name}</td>
                                        <td scope="col">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Link to="/income">
                           <button id="botoningreso" className="btn btn-lg w-100 text-white fs-4 m-3">Volver</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}