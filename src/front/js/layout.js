import React, { useEffect, useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import {Login} from"./pages/login";
import {Signup} from"./pages/signup";
import {Income} from"./pages/income";
import {FixedExpense} from"./pages/fixedexpense";
import {VariableExpense} from"./pages/variableexpense";
import {User} from"./pages/user";
import {Cartera} from"./pages/cartera";
import {Totalincomes} from"./pages/totalincomes";
import {Totalexpenses} from"./pages/totalexpenses";
import {Addincome} from"./pages/addincome";
import {Addfixedexpense} from"./pages/addfixedexpense";
import {Addvariableexpense} from"./pages/addvariableexpense";
import {Principal} from"./pages/principal";
import {Expenses} from"./pages/expenses";
import {LandingPage} from"./pages/landingpage";


import { Navbar } from "./component/navbar";
import { Sidebar } from "./component/sidebar";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    const {store, actions} = useContext(Context)

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    const userIsLogged = () => {
        fetch(process.env.BACKEND_URL+`api/logged`, { 
            method: "GET",
            headers: { "Content-Type": "application/json",
            'Authorization':'Bearer'+' '+ localStorage.getItem('token')},
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.Logged) {
                actions.setLogged(true)
            }else {
                actions.setLogged(false)
            }
        })
    }

    useEffect(()=>{
        if(localStorage.getItem('token')) {
            userIsLogged()
        }
    },[])

    return (
        <div className="h-100 d-inline">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <div className="main-body justify-content-center align-items-center">
                        {store.logged ? <Sidebar /> : ''}
                        <Routes>
                            <Route element={<Login />} path="/login" />
                            <Route element={<Signup />} path="/signup" />
                            <Route element={<Income />} path="/income" />
                            <Route element={<FixedExpense />} path="/fixedexpense" />
                            <Route element={<VariableExpense />} path="/variableexpense" />
                            <Route element={<User />} path="/user" />
                            <Route element={<Cartera />} path="/cartera" />
                            <Route element={<Totalincomes />} path="/totalincomes" />
                            <Route element={<Totalexpenses />} path="/totalexpenses" />
                            <Route element={<Addincome />} path="/addincome" />
                            <Route element={<Addfixedexpense />} path="/addfixedexpense" />
                            <Route element={<Addvariableexpense />} path="/addvariableexpense" />
                            <Route element={<Principal />} path="/principal" />
                            <Route element={<Expenses />} path="/expenses" />
                            <Route element={<LandingPage />} path="/" />

                            <Route element={<Home />} path="/" />
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<Single />} path="/single/:theid" />
                            <Route element={<h1>Not found!</h1>} />
                        </Routes>
                    </div>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);