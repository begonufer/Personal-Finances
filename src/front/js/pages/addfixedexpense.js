import React from "react";
import { Link } from "react-router-dom";

export const Addfixedexpense =()=>{
    return (
        <>
            <form className="form vw-100 text-center mt-5">
                <h1>Gasto Fijo</h1>
                <h5>Añade tus gastos fijos</h5>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <input type="text" class="form-control" id="inputDate" placeholder="Fecha"/>
                    </div>
                    <div class="form-group col-md-6">
                        <select id="inputState" class="form-control">
                            <option selected>Selecciona una categoría</option>
                            <option>Categoría 1</option>
                            <option>Categoría 2</option>
                            <option>Nueva categoría</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control" id="inputQuantity" placeholder="Importe"/>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="text" class="form-control" id="inputpercentage" placeholder="%"/>
                    </div>
                </div>
                <Link to="/expenses">
                    <button className="btn btn-danger">Cancelar</button>
                </Link>
                <button type="submit" class="btn btn-primary">Añadir</button>
            </form>
        </>
    )
}

