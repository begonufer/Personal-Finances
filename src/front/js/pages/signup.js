import React from "react";
export const Signup =()=>{
    return (
        <>
            <form className="form vw-100 text-center mt-5">
                <h1>Registro</h1>
                <label for="inputName">Nombre</label>
                <input type="text" id="inputName" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Nombre"/>
                <label for="inputSurname">Apellidos</label>
                <input type="text" id="inputSurname" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Apellidos"/>
                <label for="inputBirthdate">Fecha de nacimiento</label>
                <input type="text" id="inputBirthdate" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Fecha de nacimiento"/>
                <label for="inputPhoneNumber">Teléfono</label>
                <input type="text" id="inputPhoneNumber" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Teléfono"/>
                <label for="inputEmail">Email</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="passwordHelpBlock" placeholder="Email"/>
                <label for="inputPassword">Contraseña</label>
                <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Contraseña"/>
                <small id="passwordHelpBlock" class="form-text text-muted">
                    Tu contraseña debe tener un mínimo de 8 carácteres, contener letras y números, y no puede contener espacios ni carácteres especiales.
                </small>
                <input type="password" id="inputPasswordConfirm" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Confirma contraseña"/>
                <button class="btn btn-success" type="submit">Aceptar</button>
            </form>
        </>
    )
}