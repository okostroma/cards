import React, {ChangeEvent, useCallback, useState} from 'react';
import Button from "../../../n1-main/m1-ui/u3-common/c2-button/Button";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {connect} from "react-redux";
import Input from "../../../n1-main/m1-ui/u3-common/c3-input/Input";
import {login} from "../../../n1-main/m1-ui/u2-routes/routes";
import {NavLink} from "react-router-dom";
import {resetPasswordThunk} from "../../../n1-main/m2-bll/RestorePasswordReducer";


type MapStateToPropsType = {
    buttonName: string
    buttonType: string
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    resetPasswordThunk: (email: string) => void
}


const RestorePassword = (props: MapStateToPropsType & MapDispatchToPropsType) => {

    const [email, setEmail] = useState('');

    const setEmailCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value)
    }, [setEmail])


    const onClick = () => {
        props.resetPasswordThunk(email);
    }


    return (
        <div>
            Enter your e-mail <Input onChange={setEmailCallback} value={email} inputType={props.inputType[0]}/>

           <NavLink to={login}> <Button onClick={onClick} loading={props.loading}
                                          buttonType={props.buttonType} buttonName={props.buttonName}/></NavLink>

        </div>
    )
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        buttonName: state.restore.buttonName,
        buttonType: state.restore.buttonType[0],
        loading: state.restore.loading,
        inputType: state.restore.inputType,
        value: state.restore.value,
        isAuth: state.restore.isAuth
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {resetPasswordThunk})(RestorePassword);