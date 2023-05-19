import React, { useContext , useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Addincome =()=>{
    const [value, setValue] = useState ('');
    const [category, setCategory] = useState ('');
    const [dateTime, setDateTime] = useState ('');
    const updateValue= (valueInputValue) => {
        setValue(valueInputValue)
    }
    const updateCategory= (categoryInputValue) => {
        setCategory(categoryInputValue)
    }
    const updateDateTime= (dateTimeInputValue) => {
        setDateTime(dateTimeInputValue)
    }
    const { store, actions } = useContext(Context);
    const addincome = async() => {
        await actions.setIncome(value,category,dateTime)
        console.log(store.Income)
    }
    return (
        <>
            <div id="login" className="w-100 h-100">
                <div className="row">
                    <h1 className="text-center text-white p-5" id="fondoizq">Añade un ingreso</h1>                     
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-9 p-5 m-5 text-center">
                        <div className="row mt-5">
                            <input type="date" className="col-3 my-3 rounded-0" onChange={(e)=>{updateDateTime(e.target.value)}} id="inputDate" placeholder="Fecha"/>
                                <div className="col-6">
                                    <select onChange={(e)=>{updateCategory(e.target.value)}} id="inputCategory" className="w-100 my-3 rounded-0">
                                        <option>Selecciona una categoría</option>
                                        <option>Categoría 1</option>
                                        <option>Categoría 2</option>
                                        <option>Nueva categoría</option>
                                    </select>
                                </div>
                            <input type="text" className="col-3 my-3 rounded-0" onChange={(e)=>{updateValue(e.target.value)}} id="inputQuantity" placeholder="Importe"/>
                        </div>
                        <div className="mt-5 mb-4 justify-content-between">
                            <Link to="/income">
                                <button id="botoningreso"className="col-3 btn btn-lg text-white fs-4 m-3">Cancelar</button>
                            </Link>
                            <button onClick={addincome} id="botoningreso" className="col-3 btn btn-lg m-3 text-white fs-4" >Añadir</button>              
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <div className="form vw-100 text-center mt-5">
<h1>Ingreso</h1>
<h5>Añade tu primer ingreso</h5>
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
</div>
<Link to="/income">
    <button className="btn btn-danger">Cancelar</button>
</Link>
<button type="submit" onClick={addincome} className="btn btn-primary">Añadir</button>
</div> */}