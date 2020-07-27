import React from 'react';
import {connect, useSelector} from 'react-redux';
import {AppStateType} from "../../../n1-main/m2-bll/store";
import Button from "../../../n1-main/m1-ui/u3-common/c2-button/Button";
import Input from "../../../n1-main/m1-ui/u3-common/c3-input/Input";
import {NavLink} from "react-router-dom";
import {profile, restore} from "../../../n1-main/m1-ui/u2-routes/routes";


type mapStateToPropsType = {
    buttonName: string
    buttonType: string
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
}

const Login = (props: mapStateToPropsType) => {
    const onClick = () => {

    }
    const onChange =() => {

    }


    return (
        <div>
            <div>
                Login <Input onChange={onChange} value={props.value} inputType={props.inputType[0]}/>
            </div>
            <div>
                Password <Input onChange={onChange} value={props.value} inputType={props.inputType[1]}/>
            </div>
            <div>
                <NavLink to={restore}>Forgot password?</NavLink>
            </div>

            {props.isAuth ? <NavLink to={profile}><Button  onClick={onClick} loading={props.loading}
                                                           buttonType={props.buttonType} buttonName={props.buttonName}/></NavLink> :
                <Button  onClick={onClick} loading={props.loading}
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