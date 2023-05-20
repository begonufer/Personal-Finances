import React, { useContext , useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AddExpense =()=>{
        const { store, actions } = useContext(Context);
        useEffect(() => {
            actions.getTypes()
            actions.getCategories()
        },[])
        const [dateTime, setDateTime] = useState ('');
        const [type_id, setType_id] = useState ('');
        const [category_id, setCategory_id] = useState ('');        
        const [value, setValue] = useState ('');

        const updateDateTime= (dateTimeInputValue) => {
            setDateTime(dateTimeInputValue)
        }
        const updateType= (typeInputValue) => {
            setType_id(typeInputValue)
        }
        const updateCategory= (categoryInputValue) => {
            setCategory_id(categoryInputValue)
        }
        const updateValue= (valueInputValue) => {
            setValue(valueInputValue)
        }

        const addexpense = () => {
            actions.setExpense(dateTime, type_id, category_id, value)
            console.log(store.expense)
        }
    return (
        <>
            <div id="login" className="w-100 h-100">
                <div className="row">
                    <h1 className="text-center text-white p-5" id="fondoizq">Añade un gasto</h1>                     
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-11 p-5 m-5 text-center">
                        <div className="row mt-5">
                            <input type="text" className="col-2 my-3 rounded-0" onChange={(e)=>{updateDateTime(e.target.value)}} id="inputDate" placeholder="Fecha"/>
                                <div className="col-5">
                                    <select onChange={(e)=>{updateType(e.target.value)}} id="inputCategory" className="w-100 my-3 rounded-0">
                                        <option>Selecciona el tipo de gasto</option>
                                        {store.types?.map((type) => {
                                            return (
                                                <option key={type.id} value={type.id}>{type.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-5">
                                    <select onChange={(e)=>{updateCategory(e.target.value)}} id="inputCategory" className="w-100 my-3 rounded-0">
                                        <option>Selecciona una categoría</option>
                                        {store.categories?.map((category) => {
                                            return (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            <input type="text" className="col-2 my-3 rounded-0" onChange={(e)=>{updateValue(e.target.value)}} id="inputQuantity" placeholder="Importe"/>
                            <input type="text" className="col-2 m-3 rounded-0" id="inputPercentage" placeholder="%"/>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5 mb-4">
                        <div className="col-3">
                            <Link to="/expenses">
                                <button id="botoningreso" className="btn btn-lg w-100 text-white fs-4 m-3">Cancelar</button>
                            </Link>
                        </div>
                        <div className="col-3">
                            <button onClick={() => addexpense()} id="botoningreso" className="btn btn-lg w-100 text-white fs-4 m-3">Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}