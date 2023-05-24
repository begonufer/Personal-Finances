import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { format } from "date-fns";

export const Totalexpenses = () => {
    const { store, actions } = useContext(Context);
    const [ expenses, setExpenses] = useState([]);
    useEffect(() => {
        async function transformData() {
            await actions.getExpenses();
            const data = store.expenses.map((expense) => ({ ...expense, dateTime: format(new Date(expense.dateTime), 'dd/MM/yyyy' )}))
            setExpenses(data)
        }
        transformData();
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
                                    <th scope="col">Categoría</th>
                                    <th scope="col">Importe</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenses.map(({dateTime, type, category, value}, index) => (
                                    <tr key={index}>
                                        <td scope="col">{dateTime}</td>
                                        <td scope="col">{type.name}</td>
                                        <td scope="col">{category.name}</td>
                                        <td scope="col">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Link to="/expenses">
                           <button id="botoningreso" className="btn btn-lg w-100 text-white fs-4 m-3">Volver</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}