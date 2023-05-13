import React, { useContext , useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Addincome =()=>{
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
    const addincome = async() => {
        await actions.setIncome(value,category,dateTime,description)
        console.log(store.Income)
    }

    return (
        <>
            <form className="form vw-100 text-center mt-5">
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
            </form>
        </>
    )
}