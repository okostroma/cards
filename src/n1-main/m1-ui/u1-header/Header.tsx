import React from 'react';
import classes from "./Header.module.css"
import {HashRouter, NavLink, Route} from "react-router-dom";
import Login from "../../../n2-features/f1-auth/a1-login/l1-ui/Login";
import Registration from "../../../n2-features/f1-auth/a2-registration/Registration";
import {login, profile, registration} from "../u2-routes/routes";
import {connect} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import Profile from "../../../n2-features/f1-auth/a4-profile/profile";

type MapStateToPropsType = {
    isAuthByLogin: boolean
    isAuthByRestore: boolean
    isAuthByRegistration: boolean
}


const Header = (props: MapStateToPropsType) => {


    const isAuth = props.isAuthByLogin || props.isAuthByRegistration || props.isAuthByRestore;
    return (<div>
            {!isAuth && <div className={classes.header}>

                <NavLink to={login}> Sign in </NavLink> |
                <NavLink to={registration}> Sign up </NavLink>
            </div>
            }

            {/*{isAuth && <Profile/> }*/}

        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuthByLogin: state.login.isAuth,
        isAuthByRestore: state.restore.isAuth,
        isAuthByRegistration: state.registration.isAuth
    }
}

export default connect<MapStateToPropsType, {}, {}, AppStateType>(mapStateToProps, {})(Header);