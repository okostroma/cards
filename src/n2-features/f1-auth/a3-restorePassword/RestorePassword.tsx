import React from 'react';
import Button from "../../../n1-main/m1-ui/u3-common/Button";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {connect} from "react-redux";
import Input from "../../../n1-main/m1-ui/u3-common/Input";


type mapStateToPropsType = {
    buttonName: string
    buttonType: string
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
}


const RestorePassword = (props: mapStateToPropsType) => {
    const onClick = () => {

    }

    const onChange =() => {

    }

    return (
        <div>
            Enter your e-mail <Input onChange={onChange} value={props.value} inputType={props.inputType[0]}/>

            <Button onClick={onClick} loading={props.loading} buttonType={props.buttonType} buttonName={props.buttonName}/>

        </div>
    )
}
const mapStateToProps = (state: AppStateType) => {
    return {
        buttonName: state.restore.buttonName,
        buttonType: state.restore.buttonType[0],
        loading: state.restore.loading,
        inputType: state.restore.inputType,
        value: state.restore.value,
        isAuth: state.restore.isAuth
    }

}

export default connect(mapStateToProps, null)(RestorePassword);