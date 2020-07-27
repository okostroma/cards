import React from 'react';
import Button from "../../../n1-main/m1-ui/u3-common/c2-button/Button";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {connect} from "react-redux";
import Input from "../../../n1-main/m1-ui/u3-common/c3-input/Input";
import {NavLink} from "react-router-dom";
import {profile} from "../../../n1-main/m1-ui/u2-routes/routes";

type mapStateToPropsType = {
    buttonName: string
    buttonType: string
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
}


const Registration = (props: mapStateToPropsType) => {

    const onClick = () => {

    }

    const onChange =() => {

    }


    return (
        <div>
            <div>
                Your e-mail <Input onChange={onChange} value={props.value} inputType={props.inputType[0]}/>
            </div>
            <div>
                Your password <Input onChange={onChange} value={props.value} inputType={props.inputType[1]}/>
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
        buttonName: state.registration.buttonName,
        buttonType: state.registration.buttonType[0],
        loading: state.registration.loading,
        inputType: state.registration.inputType,
        value: state.registration.value,
        isAuth: state.registration.isAuth
    }
}

export default connect(mapStateToProps, null)(Registration);