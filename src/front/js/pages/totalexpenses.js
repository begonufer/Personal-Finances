import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Totalexpenses = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getExpenses();
    }, [])
    return (
        <>
            <div id="login" className="w-100 h-100">
                <div className="row">
                    <h1 className="text-center text-white p-5" id="fondoizq">Resumen de gastos</h1>
                </div>
                <div className="wrap flex-column w-100 m-3">
                    <div className="row justify-content-center align-items-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Importe</th>
                                    <th scope="col">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {store.expenses.map(({dateTime, type, category, value}, index) => (
                                    <tr key={index}>
                                        <td scope="col">{dateTime}</td>
                                        <td scope="col">{type}</td>
                                        <td scope="col">{category}</td>
                                        <td scope="col">{value}</td>
                                        <td scope="col">400</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Link to="/expenses">
                            <button className="btn btn-success rounded">Volver</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}