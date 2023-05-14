import React from "react";
import { Link } from "react-router-dom";

export const AddExpenseButton = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="ms-nav-container">
                            <ul className="ms-nav">
                                <input type="checkbox" id="ms-menu" className="ms-menu-toggle" name="ms-menu-toggle" />
                                <div className="bg-change"></div>
                                <li className="ms-li ms-li2">
                                    <a href="javascript:void(0)" className="m-0 p-0">
                                        <Link to="/addfixedexpense">
                                            <i className="fa-solid fa-circle-dollar-to-slot"> </i>
                                        </Link>
                                    </a>
                                </li>
                                <li className="ms-li ms-li1 ms-li-first">
                                    <a href="javascript:void(0)" className="m-0 p-0">
                                        <Link to="/addvariableexpense">
                                            <i className="fa-solid fa-cash-register"></i>
                                        </Link>
                                    </a>
                                </li>
                                <li className="ms-main">
                                    <a href="javascript:void(0)">
                                        <label className="ms-menu-toggle-lbl" for="ms-menu">
                                            <span className="fa fa-plus"></span>
                                        </label>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};