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
            <div className="form2 vw-100 text-center">
                <h1 className="text-white">Ingreso</h1>
                <h5 className="text-white">Añade tu primer ingreso</h5>
                <div className="form-row1">
                    <div className="form-group">
                        
                        <input type="text" className="form-control" onChange={(e)=>{updateDateTime(e.target.value)}} id="inputDate" placeholder="Fecha"/>
                    </div>
                    <div className="form-group">
                        <select onChange={(e)=>{updateCategory(e.target.value)}} id="inputState" className="form-control">
                            <option>Selecciona una categoría</option>
                            <option>Categoría 1</option>
                            <option>Categoría 2</option>
                            <option>Nueva categoría</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={(e)=>{updateValue(e.target.value)}} id="inputQuantity" placeholder="Importe"/>
                    </div>
                </div>
                <div className="mt-5">
                <button type="submit" onClick={addincome} className="btn btn-info text-white rounded">Añadir</button>
                <Link to="/income">
                    <button className="btn btn-info text-white rounded">Cancelar</button>
                </Link>
                </div>
            </div>
        </>
    )
}