import React from "react";
export const Login =()=>{
    return (
        <>
            <form className="form vw-100 text-center mt-5">
                <h1>Inicio de sesión</h1>
                <label for="inputEmail">Email</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="passwordHelpBlock" placeholder="Email"/>
                <label for="inputPassword">Contraseña</label>
                <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Contraseña"/>
                <small id="passwordHelpBlock" class="form-text text-muted">
                    He olvidado mi contraseña
                </small>
                <button class="btn btn-success" type="submit ">Aceptar</button>
            </form>
        </>
    )
}