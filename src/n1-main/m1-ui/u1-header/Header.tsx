import React from 'react';
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {login, logout, registration} from "../u2-routes/routes";
import {useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";


export const Header = () => {

    const loginState: any = useSelector<AppStateType>(state => state.login)

    return (<div className={classes.header}>
             <div>
                    <NavLink to={login}> Sign in </NavLink> |
                    <NavLink to={registration}> Sign up </NavLink>
                </div>
                {/*: <div>*/}
                {/*    <NavLink to={logout}> Log out </NavLink>*/}
                {/*</div>}*/}

        </div>

    )
}

