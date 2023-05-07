import React from "react";
export const Addfixedexpense =()=>{
    return (
        <>Aqui se agrega un nuevo gasto fijo carajooooo
            <form className="form vw-100 text-center mt-5">
                <h1>Ingreso</h1>
                <h5>Añade tu primer ingreso</h5>
                <label for="inputEmail">Email</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="passwordHelpBlock" placeholder="Email"/>
                <label for="inputPassword">Contraseña</label>
                <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Contraseña"/>
                <small id="passwordHelpBlock" class="form-text text-muted">
                    He olvidado mi contraseña
                </small>
                <button class="btn btn-success" type="submit">Aceptar</button>
            </form>
            <form className="form vw-100 text-center mt-5">
                <h1>Ingreso</h1>
                <h5>Añade tu primer ingreso</h5>
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
                </div>
                <button type="submit" class="btn btn-primary">Añadir</button>
            </form>
        </>
    )
}

