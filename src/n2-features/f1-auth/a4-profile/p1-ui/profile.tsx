import React, {useEffect} from 'react';
import user from '../user.png';
import classes from "./profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import Cookies from "js-cookie";
import {authMe} from "../../a1-login/l2-bll/LoginReducer";


export const Profile = () => {

    const dispatch = useDispatch()

    const getCookie = () => {
        const token = Cookies.get('token')
        if (token) {
            dispatch(authMe(token))
        }
    }
    useEffect(() => {
        getCookie()
    }, [])

    const login: any = useSelector<AppStateType>(state => state.login)

    return (
        <div>
            <img className={classes.avatar} alt='user' src={user}/> {login.email}
        </div>
    )
}

