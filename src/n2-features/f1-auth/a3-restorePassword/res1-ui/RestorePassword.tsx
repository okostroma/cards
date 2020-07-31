import React, {ChangeEvent, useCallback, useState} from 'react';
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../../n1-main/m1-ui/u2-routes/routes";
import {NavLink} from "react-router-dom";
import Input from '../../../../n1-main/m1-ui/u3-common/c3-input/Input';
import Button from "../../../../n1-main/m1-ui/u3-common/c2-button/Button";
import {resetPasswordThunk} from "../res2-bll/RestorePasswordReducer";


export const RestorePassword = () => {
    const restore: any = useSelector<AppStateType>(state => state.restore)
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const setEmailCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value)
    }, [setEmail])


    const onClick = () => {
        dispatch(resetPasswordThunk(email));
    }

     const buttonDisabled = restore.loading ? true : false
    return (
        <div>
            Enter your e-mail <Input onChange={setEmailCallback} value={restore.value} inputType={restore.inputType[0]}/>

           <NavLink to={login}> <Button buttonDisabled={buttonDisabled} onClick={onClick} loading={restore.loading}
                                          buttonType={restore.buttonType} buttonName={restore.buttonName}/></NavLink>

        </div>
    )
}
