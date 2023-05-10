import React, { useContext , useState } from "react";
import { Context } from "../store/appContext";

export const Signup =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [birthdate,setBirthdate] = useState('');
    const [phone_number,setPhone_number] = useState('');

    const updateEmail = (emailInputValue) => {
        setEmail(emailInputValue)
    }

    const updatePassword = (passwordInputValue) => {
        setPassword(passwordInputValue)
    }

    const updateName = (nameInputValue) => {
        setName(nameInputValue)
    }

    const updateSurname= (surnameInputValue) => {
        setSurname(surnameInputValue)
    }

    const updateBirthdate = (birthdateInputValue) => {
        setBirthdate(birthdateInputValue)
    }

    const updatePhone_number = (phone_numberInputValue) => {
        setPhone_number(phone_numberInputValue)
    }

    const { store, actions } = useContext(Context);
    const Signup = async() => {
        await actions.setnewUser(email, password,name,surname,birthdate,phone_number)
        console.log(store.newuser)
    }
    return (
        <>
            <form className="form vw-100 text-center mt-5">
                <h1>Registro</h1>
                <label for="inputName">Nombre</label>
                <input type="text" onChange={(e)=>{updateName(e.target.value)}} id="inputName" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Nombre"/>
                <label for="inputSurname">Apellidos</label>
                <input type="text" onChange={(e)=>{updateSurname(e.target.value)}} id="inputSurname" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Apellidos"/>
                <label for="inputBirthdate">Fecha de nacimiento</label>
                <input type="text" onChange={(e)=>{updateBirthdate(e.target.value)}} id="inputBirthdate" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Fecha de nacimiento"/>
                <label for="inputPhoneNumber">Teléfono</label>
                <input type="text"  onChange={(e)=>{updatePhone_number(e.target.value)}} id="inputPhoneNumber" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Teléfono"/>
                <label for="inputEmail">Email</label>
                <input type="email" onChange={(e)=>{updateEmail(e.target.value)}} className="form-control" id="inputEmail" aria-describedby="passwordHelpBlock" placeholder="Email"/>
                <label for="inputPassword">Contraseña</label>
                <input type="password" onChange={(e)=>{updatePassword(e.target.value)}} id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Contraseña"/>
                <small id="passwordHelpBlock" className="form-text text-muted">
                    Tu contraseña debe tener un mínimo de 8 carácteres, contener letras y números, y no puede contener espacios ni carácteres especiales.
                </small>
                {/* <input type="password" id="inputPasswordConfirm" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Confirma contraseña"/> */}
                <button className="btn btn-success" type="submit" onClick={Signup}>Aceptar</button>
            </form>
        </>
    )
}