import React from "react";
import { Link } from "react-router-dom";
export const User =()=>{
    return (
        <>            
        
        
            <form className="form1">
            <h2 className="text-center fw-bold">TU CUENTA CONMO</h2><br></br>
                <div className="form-row">
                    <div className="form-group ">
                    <span class="col-md-1 col-md-offset-2 "><i class="fa fa-user bigicon"></i></span>
                        <label htmlFor="inputNombre">Nombre</label>
                        <input type="text" className="form-control" id="inputNombre" />
                    </div>
                    <div className="form-group ">
                    <span class="col-md-1 col-md-offset-2 "><i class="fa fa-user bigicon"></i></span>
                        <label htmlFor="inputApellidos">Apellidos</label>
                        <input type="text" className="form-control" id="inputApellidos" />
                    </div>
                    <div className="form-group ">
                    <span class="col-md-1 col-md-offset-2 "><i class="fa-solid fa-cake-candles bigicon"></i></span>
                        <label htmlFor="inputFechadenacimiento">Fecha de nacimiento</label>
                        <input type="text" className="form-control" id="inputFechadenacimiento" />
                    </div>
                    <div className="form-group ">
                    <span class="col-md-1 col-md-offset-2 "><i class="fa fa-phone-square bigicon"></i></span>
                        <label htmlFor="Teléfono">Teléfono</label>
                        <input type="text" className="form-control" id="telefono" />
                    </div>
                    <div className="form-group  ">
                    <span class="col-md-1 col-md-offset-2 "><i class="fa-solid fa-at bigicon"></i></span>
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group  ">
                    <span class="col-md-1 col-md-offset-2 "><i class="fa-solid fa-key bigicon"></i></span>
                        <label htmlFor="inputContraseña">Contraseña</label>
                        <input type="password" className="form-control" id="inputContraseña" />
                    </div>
                </div>
                <br></br>
                <div>
                <button type="submit" className="btn btn-info text-white rounded">Guardar</button>
                <Link to="/principal" >  
                <button className="btn btn-info text-white rounded">Volver</button>
                </Link>
                </div>
            </form> 
        </>
    )
}