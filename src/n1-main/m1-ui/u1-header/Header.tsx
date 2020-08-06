import React from 'react';
import classes from "./Header.module.css"
import {NavLink, useHistory} from "react-router-dom";
import {login, packs, registration} from "../u2-routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {logOut} from '../../../n2-features/f1-auth/a1-login/l2-bll/LoginReducer';
import Button from "../u3-common/c2-button/Button";


export const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onClickLogout = () => {
        dispatch(logOut())
        history.push(login)
    }

    const loginState: any = useSelector<AppStateType>(state => state.login)

    return (<div className={classes.header}>
            {loginState.isAuth === false
                ?
                <div>
                    <NavLink to={login}> Sign in </NavLink> |
                    <NavLink to={registration}> Sign up </NavLink>
                </div>
                :
                <div className={classes.headerButtons} >
                    <Button buttonName={'Log out'} buttonType={'primary'} loading={false} onClick={onClickLogout} buttonDisabled={false}/>
                    <NavLink to={packs}>
                        <Button buttonName={'Show packs'} buttonType={'light'} loading={false} onClick={()=>{}} buttonDisabled={false}/>
                    </NavLink>
                </div>

            }

        </div>

    )
}

