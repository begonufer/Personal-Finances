import React from "react";
import { Link } from "react-router-dom";
export const User =()=>{
    return (
        <> 
            <div id="login" className="w-100 h-100">
                <div className="row">
                    <h1 className="text-center text-white p-5" id="fondoizq">Configuración</h1>                     
                </div>
                <div className="m-3 row justify-content-center align-items-center">
                    <div className="col-8 p-5 text-center rounded" id="fondo">
                        <div className="mt-5">
                            <input type="text" id="inputName" className="w-100 my-3 border-0 border-bottom border-color-light rounded-0" aria-describedby="passwordHelpBlock" placeholder="Nombre"/>
                            <input type="text" id="inputSurname" className="w-100 my-3 border-0 border-bottom border-color-light rounded-0" aria-describedby="passwordHelpBlock" placeholder="Apellidos"/>
                            <input type="text" id="inputBirthdate" className="w-100 my-3 border-0 border-bottom border-color-light rounded-0" aria-describedby="passwordHelpBlock" placeholder="Fecha de nacimiento"/>
                            <input type="text" id="inputPhoneNumber" className="w-100 my-3 border-0 border-bottom border-color-light rounded-0" aria-describedby="passwordHelpBlock" placeholder="Teléfono"/>
                            <input type="email" id="inputEmail" className="w-100 my-3 border-0 border-bottom border-color-light rounded-0" aria-describedby="passwordHelpBlock" placeholder="Email"/>
                            <input type="password" id="inputPassword" className="w-100 my-3 border-0 border-bottom border-color-light rounded-0" aria-describedby="passwordHelpBlock" placeholder="Contraseña"/>
                        </div>
                        <div className="ml-auto">
                            <button id="botoningreso" className="btn btn-lg mt-5 mb-3 mx-4 text-white fs-4">Cancelar</button>
                            <button id="botoningreso" className="btn btn-lg mt-5 mb-3 mx-4 text-white fs-4">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}