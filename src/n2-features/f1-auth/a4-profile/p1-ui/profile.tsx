import React, {useEffect, useState} from 'react';
import user from '../user.png';
import classes from "./profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";


export const Profile = () => {

    //
    // const profile: any = useSelector<AppStateType>(state => state.profile)
    const userName: any = useSelector<AppStateType>(state => state.login.userName)

    return (
        <div>
            <img className={classes.avatar} alt='user' src={user}/> {userName}

        </div>
    )
}

