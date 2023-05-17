import React, { useContext , useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/welcome.css";

export const Login =()=>{
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const updateEmail = (emailInputValue) => {
        setEmail(emailInputValue)
    }

    const updatePassword = (passwordInputValue) => {
        setPassword(passwordInputValue)
    }

    const { actions } = useContext(Context);
    const login = async() => {
        await actions.setUser(email, password)
    }

    return (
        <>
            <div id="login" className="w-100">
                <div className="m-0 vh-100 row justify-content-center align-items-center">
                    <div className="col-auto p-0 rounded shadow" id="fondoizq">
                        <div className="row p-5 text-center justify-content-center align-items-center rounded-1">
                            <div className="col-auto p-5 text-center rounded-1">
                                <h1 className="conmo text-center">CONMO</h1>
                                <h3 className="text-white text-center">Control your money</h3>
                            </div>
                            <div className="col-auto m-0 p-5 text-center rounded-1" id="fondo">
                                <div className="mb-5">
                                    <h1 className="text-white pb-5">Iniciar sesión</h1>                                    
                                </div>
                                <div className="mt-5">
                                    <input type="email" onChange={(e)=>{updateEmail(e.target.value)}} className="w-100 my-3 border-0 border-bottom border-color-light rounded-0" id="inputEmail" aria-describedby="passwordHelpBlock" placeholder="Email"/>
                                    <input type="password" onChange={(e)=>{updatePassword(e.target.value)}} id="inputPassword" className="w-100 mt-5 mb-3 border-0 border-bottom border-color-light rounded-0" aria-describedby="passwordHelpBlock" placeholder="Contraseña"/>
                                    <small id="passwordHelpBlock" className="form-text text-white">
                                        He olvidado mi contraseña
                                    </small>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/signup">
                                        <button id="botoningreso"className="btn btn-lg mt-5 mb-3 text-white fs-4" onClick={login}>Aceptar</button>
                                    </Link>
                                </div>
                                <span className="text-white">¿No tienes cuenta? <a href="/signup"> Regístrate </a> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
