import React, {ChangeEvent, useCallback, useState} from 'react';
import Button from "../../../../n1-main/m1-ui/u3-common/c2-button/Button";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../../n1-main/m1-ui/u3-common/c3-input/Input";
import {Redirect} from "react-router-dom";
import {profile} from "../../../../n1-main/m1-ui/u2-routes/routes";
import {registrationThunk} from "../r2-bll/RegisterReducer";
import classes from "./Registration.module.css";


export const Registration = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.registration.isAuth)
    const serverAnswer = useSelector<AppStateType, string>(state => state.registration.serverAnswer)
    const inputType = useSelector<AppStateType, string[]>(state => state.registration.inputType)
    const loading = useSelector<AppStateType, boolean>(state => state.registration.loading)
    const buttonName = useSelector<AppStateType, string>(state => state.registration.buttonName)
    const buttonType = useSelector<AppStateType, string[]>(state => state.registration.buttonType)

    const dispatch = useDispatch();

    const [email, setEmail] = useState('oxa@gmail.com')
    const [password, setPassword] = useState('!12345!123')

    const setEmailCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value)
    }, [setEmail])

    const setPasswordCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.currentTarget.value)
    }, [setPassword])

    const postUserData = useCallback(
        () => dispatch(registrationThunk(email, password)),
        [email, password, dispatch]
    );

    const buttonDisabled = loading

    if (isAuth) {
        return <Redirect to={profile}/>
    }
    return (
        <div>
            <div>
                Your e-mail <Input onChange={setEmailCallback} value={email} inputType={inputType[0]}/>
            </div>
            <div>
                Your password <Input onChange={setPasswordCallback} value={password} inputType={inputType[1]}/>
            </div>
            <div>{password.length <= 7 && <span className={classes.error}>Password length must be more then 7</span>}</div>

            {serverAnswer === 'some error' && <span>{serverAnswer}</span>}

            <Button buttonDisabled={buttonDisabled} onClick={postUserData} loading={loading}
                    buttonType={serverAnswer !== '' ? buttonType[1] : buttonType[0]}
                    buttonName={buttonName}/>

        </div>
    )
}
