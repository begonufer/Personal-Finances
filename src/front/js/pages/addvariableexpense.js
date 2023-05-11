import React, { useContext , useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Addvariableexpense =()=>{

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
        const addvariablexpense = async() => {
            await actions.setVariableexpense(value,category,dateTime,description)
            console.log(store.variableexpense)
        }


    return (

        <>
            <form className="form vw-100 text-center mt-5">
                <h1>Gasto variable</h1>
                <h5>Añade tus gastos variables</h5>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <input type="text" class="form-control" onChange={(e)=>{updateDateTime(e.target.value)}} id="inputDate" placeholder="Fecha"/>
                    </div>
                    <div class="form-group col-md-6">
                        <select onChange={(e)=>{updateCategory(e.target.value)}} id="inputState" class="form-control">
                            <option selected>Selecciona una categoría</option>
                            <option>Categoría 1</option>
                            <option>Categoría 2</option>
                            <option>Nueva categoría</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control" onChange={(e)=>{updateValue(e.target.value)}} id="inputQuantity" placeholder="Importe"/>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control" id="inputpercentage" placeholder="%"/>
                    </div>
                </div>
                <Link to="/expenses">
                    <button className="btn btn-danger">Cancelar</button>
                </Link>
                <button type="submit" onClick={addvariablexpense} class="btn btn-primary">Añadir</button>
            </form>
        </>
    )
}