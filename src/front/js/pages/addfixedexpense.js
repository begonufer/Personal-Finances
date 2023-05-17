import React, { useContext , useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Addfixedexpense =()=>{
        const [value, setValue] = useState ('');
        const [category, setCategory] = useState ('');
        const [dateTime, setDateTime] = useState ('');
        const [description, setDescription] = useState ('');
    
        const updateValue= (valueInputValue) => {
            setValue(valueInputValue)
        }
        const updateCategory= (categoryInputValue) => {
            setCategory(categoryInputValue)
        }
        const updateDateTime= (dateTimeInputValue) => {
            setDateTime(dateTimeInputValue)
        }
        const updateDescription= (descriptionInputValue) => {
            setDescription(descriptionInputValue)
        }
        const { store, actions } = useContext(Context);
        const addfixedexpense = async() => {
            await actions.setExpense(value,category,dateTime,description)
            console.log(store.expense)
        }
    return (
        <>
            <div id="login" className="w-100 h-100">
                <div className="row">
                    <h1 className="text-center text-white p-5" id="fondoizq">Añade un gasto fijo</h1>                     
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-11 p-5 m-5 text-center">
                        <div className="row mt-5">
                            <input type="text" className="col-2 my-3 rounded-0" onChange={(e)=>{updateDateTime(e.target.value)}} id="inputDate" placeholder="Fecha"/>
                                <div className="col-5">
                                    <select onChange={(e)=>{updateCategory(e.target.value)}} id="inputCategory" className="w-100 my-3 rounded-0">
                                        <option>Selecciona una categoría</option>
                                        <option>Categoría 1</option>
                                        <option>Categoría 2</option>
                                        <option>Nueva categoría</option>
                                    </select>
                                </div>
                            <input type="text" className="col-2 my-3 rounded-0" onChange={(e)=>{updateValue(e.target.value)}} id="inputQuantity" placeholder="Importe"/>
                            <input type="text" className="col-2 m-3 rounded-0" id="inputPercentage" placeholder="%"/>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5 mb-4">
                        <div className="col-3">
                            <Link to="/expenses">
                                <button id="botoningreso"className="btn btn-lg w-100 text-white fs-4 m-3">Cancelar</button>
                            </Link>
                        </div>
                        <div className="col-3">
                            <button onClick={addfixedexpense} id="botoningreso"className="btn btn-lg w-100 text-white fs-4 m-3" >Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
{/* <form className="form vw-100 text-center mt-5">
<h1>Gasto Fijo</h1>
<h5>Añade tus gastos fijos</h5>
<div className="form-row">
    <div className="form-group col-md-3">
        <input type="text" className="form-control" onChange={(e)=>{updateDateTime(e.target.value)}} id="inputDate" placeholder="Fecha"/>
    </div>
    <div className="form-group col-md-6">
        <select onChange={(e)=>{updateCategory(e.target.value)}} id="inputState" className="form-control">
            <option>Selecciona una categoría</option>
            <option>Categoría 1</option>
            <option>Categoría 2</option>
            <option>Nueva categoría</option>
        </select>
    </div>
    <div className="form-group col-md-2">
        <input type="text" className="form-control" onChange={(e)=>{updateValue(e.target.value)}} id="inputQuantity" placeholder="Importe"/>
    </div>
    <div className="form-group col-md-2">
        <input type="text" className="form-control" id="inputpercentage" placeholder="%"/>
    </div>
</div>
<Link to="/expenses">
    <button className="btn btn-danger">Cancelar</button>
</Link>
<button type="submit" onClick={addfixedexpense} className="btn btn-primary">Añadir</button>
</form> */}
