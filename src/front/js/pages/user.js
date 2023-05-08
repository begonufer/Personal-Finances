import React from "react";
export const User =()=>{
    return (
        <>            
            <form>
                <div className="form-row">
                    <div className="form-group">
                        <label for="inputNombre">Nombre</label>
                        <input type="text" className="form-control" id="inputNombre" />
                    </div>
                    <div className="form-group">
                        <label for="inputApellidos">Apellidos</label>
                        <input type="text" className="form-control" id="inputApellidos" />
                    </div>
                    <div className="form-group">
                        <label for="inputFechadenacimiento">Fecha de nacimiento</label>
                        <input type="text" className="form-control" id="inputFechadenacimiento" />
                    </div>
                    <div className="form-group">
                        <label for="Teléfono">Teléfono</label>
                        <input type="text" className="form-control" id="telefono" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputContraseña">Contraseña</label>
                        <input type="password" className="form-control" id="inputContraseña" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </>
    )
}