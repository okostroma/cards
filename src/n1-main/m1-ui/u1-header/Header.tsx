import React from 'react';
import classes from "./Header.module.css"
import {HashRouter, NavLink, Route} from "react-router-dom";
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import Registration from "../../../n2-features/f1-auth/a2-registration/Registration";




const Header = () => {
    return (
        <div className={classes.header}>
           <NavLink to='/login'> Sign in </NavLink> |
           <NavLink to='/registration'> Sign up </NavLink>
        </div>
    )
}

export default Header;