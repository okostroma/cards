import React, {ChangeEvent, useCallback, useState} from 'react';
import Button from "../../../n1-main/m1-ui/u3-common/c2-button/Button";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {connect} from "react-redux";
import Input from "../../../n1-main/m1-ui/u3-common/c3-input/Input";
import {NavLink} from "react-router-dom";
import {profile} from "../../../n1-main/m1-ui/u2-routes/routes";
import {isFetching, isUserAuth, registrationThunk} from "../../../n1-main/m2-bll/RegisterReducer";

type MapStateToPropsType = {
    buttonName: string
    buttonType: string
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
    serverAnswer: string
}
type MapDispatchToPropsType = {
    isFetching: (loading: boolean) => void
    isUserAuth: (isAuth: boolean) => void
    registrationThunk: (email: string, password: string) => void
}


const Registration = (props: MapStateToPropsType & MapDispatchToPropsType) => {

    const [email, setEmail] = useState('oxa@gmail.com')
    const [password, setPassword] = useState('!12345!')

    const onClick = () => {
        // props.isFetching(true);

    }
    const setEmailCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value)
    }, [setEmail])

    const setPasswordCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.currentTarget.value)
    }, [setPassword])

    const postUserData = () => {

        props.registrationThunk(email, password);
    }


    return (
        <div>
            <div>
                Your e-mail <Input onChange={setEmailCallback} value={email} inputType={props.inputType[0]}/>
            </div>
            <div>
                Your password <Input onChange={setPasswordCallback} value={password} inputType={props.inputType[1]}/>
            </div>

            {props.serverAnswer === 'some error' && <span>{props.serverAnswer}</span>}

            {props.isAuth ? <NavLink to={profile}><Button  onClick={onClick} loading={props.loading}
                                                           buttonType={props.buttonType} buttonName={props.buttonName}/></NavLink> :
                <Button  onClick={postUserData} loading={props.loading}
                         buttonType={props.buttonType} buttonName={props.buttonName}/>}

        </div>
    )
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        buttonName: state.registration.buttonName,
        buttonType: state.registration.buttonType[0],
        loading: state.registration.loading,
        inputType: state.registration.inputType,
        value: state.registration.value,
        isAuth: state.registration.isAuth,
        serverAnswer: state.registration.serverAnswer
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {isFetching, isUserAuth, registrationThunk})(Registration);