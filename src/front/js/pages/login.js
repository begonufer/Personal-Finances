import React, { useContext , useState } from "react";
import { Context } from "../store/appContext";

export const Login =()=>{
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const updateEmail = (emailInputValue) => {
        setEmail(emailInputValue)
    }

    const updatePassword = (passwordInputValue) => {
        setPassword(passwordInputValue)
    }

    const { store, actions } = useContext(Context);
    const login = async() => {
        await actions.setUser(email, password)
        console.log(store.user)
    }

    return (
        <>
            <div className="form vw-100 text-center mt-5">
                <h1>Inicio de sesión</h1>
                <label for="inputEmail">Email</label>
                <input type="email" onChange={(e)=>{updateEmail(e.target.value)}} className="form-control" id="inputEmail" aria-describedby="passwordHelpBlock" placeholder="Email"/>
                <label for="inputPassword">Contraseña</label>
                <input type="password" onChange={(e)=>{updatePassword(e.target.value)}} id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Contraseña"/>
                <small id="passwordHelpBlock" class="form-text text-muted">
                    He olvidado mi contraseña
                </small>
                <button class="btn btn-success" onClick={login} >Aceptar</button>
            </div>
        </>
    )
}