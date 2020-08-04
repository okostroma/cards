import React, {useEffect} from 'react';
import React, {useEffect, useState} from 'react';
import user from '../user.png';
import classes from "./profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import Cookies from "js-cookie";
import {authMe} from "../../a1-login/l2-bll/LoginReducer";
import { NavLink } from 'react-router-dom';


export const Profile = () => {

    const dispatch = useDispatch()

    const getCookie = () =>{
        const token = Cookies.get('token')
        if (token){
            dispatch(authMe(token))
        }
    }
    useEffect(()=>{
        getCookie()
    }, [])

    const login: any = useSelector<AppStateType>(state => state.login)
    const userName: any = useSelector<AppStateType>(state => state.login.userName)

    return (
        <div>
            <img className={classes.avatar} alt='user' src={user}/> {userName}

            <NavLink to={'/cards'}> Cards </NavLink>


            <img className={classes.avatar} alt='user' src={user}/> {login.email}
        </div>
    )
}

