import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {AppStateType} from "../../../../n1-main/m2-bll/store";

import {NavLink} from "react-router-dom";
import {profile, restore} from "../../../../n1-main/m1-ui/u2-routes/routes";
import {getAuth, singIn} from "../l2-bll/LoginReducer";
import Input from "../../../../n1-main/m1-ui/u3-common/c3-input/Input";
import Button from '../../../../n1-main/m1-ui/u3-common/c2-button/Button';


type mapStateToPropsType = {
    buttonName: string
    buttonType: string
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
}

const Login = (props: mapStateToPropsType) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(true)

    const setEmailCallback = useCallback((e: ChangeEvent<HTMLInputElement>):void => setEmail(e.currentTarget.value), [setEmail]);
    const setPasswordCallback = useCallback((e: ChangeEvent<HTMLInputElement>):void => setPassword(e.currentTarget.value), [setPassword]);
    const setRememberMeCallback = useCallback((e: ChangeEvent<HTMLInputElement>):void => setRememberMe(e.currentTarget.checked), [setRememberMe]);

    const dispatch = useDispatch();

    const signInCallback = useCallback(
        () => dispatch(singIn(email, password, rememberMe)),
        [email, password, dispatch]
    );
    useEffect(
        () =>{
            dispatch(getAuth())
        }, []
    );


    const onClick = () => {

    }
    const onChange = () => {

    }


    return (
        <div>
            <div>
                Login <Input onChange={setEmailCallback} value={props.value} inputType={props.inputType[0]}/>
            </div>
            <div>
                Password <Input onChange={setPasswordCallback} value={props.value} inputType={props.inputType[1]}/>
            </div>
            <div>
                Remember me <Input onChange={setRememberMeCallback} value={props.value} inputType={props.inputType[2]}/>
            </div>
            <div>
                <NavLink to={restore}>Forgot password?</NavLink>
            </div>

            {props.isAuth
                ? <NavLink to={profile}><Button onClick={onClick}
                                                          loading={props.loading}
                                                          buttonType={props.buttonType} buttonName={props.buttonName}/></NavLink>
                :<Button onClick={signInCallback} loading={props.loading}
                        buttonType={props.buttonType} buttonName={props.buttonName}/>}
        </div>
    )

}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        buttonName: state.login.buttonName,
        buttonType: state.login.buttonType[0],
        loading: state.login.loading,
        inputType: state.login.inputType,
        value: state.login.value,
        isAuth: state.login.isAuth
    }
}

export default connect(mapStateToProps, null)(Login);