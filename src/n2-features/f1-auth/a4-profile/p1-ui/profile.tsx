import React from 'react';
import user from '../user.png';
import classes from "./profile.module.css";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";


export const Profile = () => {

    const profile: any = useSelector<AppStateType>(state => state.profile)

    return (
        <div>
            <img className={classes.avatar} alt='user' src={user}/> {profile.userName}
        </div>
    )
}

