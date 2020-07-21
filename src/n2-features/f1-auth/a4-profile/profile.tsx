import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from "../../../n1-main/m2-bll/store";
import user from './user.png';
import classes from "./profile.module.css";



type MapStateToPropsType = {
    userId: string
    userName: string
}

const Profile = (props: MapStateToPropsType) => {


    return (
        <div>
            <img className={classes.avatar} alt='user' src={user}/> {props.userName}



        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userId: state.profile.userId,
        userName: state.profile.userName

    }
}

export default connect<MapStateToPropsType, {}, {}, AppStateType>(mapStateToProps, {})(Profile);