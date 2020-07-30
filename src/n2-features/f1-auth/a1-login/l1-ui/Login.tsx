import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {NavLink, Redirect} from "react-router-dom";
import {profile, restore} from "../../../../n1-main/m1-ui/u2-routes/routes";
import {singIn} from "../l2-bll/LoginReducer";
import Input from "../../../../n1-main/m1-ui/u3-common/c3-input/Input";
import Button from '../../../../n1-main/m1-ui/u3-common/c2-button/Button';
import classes from "./Login.module.css";



const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const setEmailCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => setEmail(e.currentTarget.value), [setEmail]);
    const setPasswordCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => setPassword(e.currentTarget.value), [setPassword]);
    const setRememberMeCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => setRememberMe(e.currentTarget.checked), [setRememberMe]);


    const login: any = useSelector<AppStateType>(state => state.login)
    const dispatch = useDispatch();

    const signInCallback = useCallback(
        () => dispatch(singIn(email, password, rememberMe)),
        [email, password, rememberMe, dispatch]
    );

    if (login.isAuth) {
        return <Redirect to={profile}/>
    }
    const inputStyle = login.error !== '' ? classes.errorLogin : ''
    const buttonDisabled = login.loading ? true : false
    return (

        <form>
            <div className={classes.errorText}>{login.error}</div>
            <div className={inputStyle}>
                Login <Input onChange={setEmailCallback} value={login.value} inputType={login.inputType[0]}/>
            </div>
            <div className={inputStyle}>
                Password <Input onChange={setPasswordCallback} value={login.value} inputType={login.inputType[1]}/>
            </div>
            <div>
                Remember me <Input onChange={setRememberMeCallback} value={login.value} inputType={login.inputType[2]}/>
            </div>
            <div>
                <NavLink to={restore}>Forgot password?</NavLink>
            </div>
            <Button buttonDisabled={buttonDisabled} onClick={signInCallback} loading={login.loading}
                    buttonType={login.error !== '' ? login.buttonType[1] : login.buttonType[0] } buttonName={login.buttonName}/>

        </form>
    )

}
export default Login;