import React, {useEffect} from 'react';
import user from '../user.png';
import classes from "./profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {authMe} from "../../a1-login/l2-bll/LoginReducer";


export const Profile = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authMe())
    },[])

    const login: any = useSelector<AppStateType>(state => state.login)

    return (
        <div>
            <img className={classes.avatar} alt='user' src={user}/> {login.email}
        </div>
    )
}

