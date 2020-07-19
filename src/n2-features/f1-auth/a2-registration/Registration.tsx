import React from 'react';
import Button from "../../../n1-main/m1-ui/u3-common/Button";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {connect} from "react-redux";
import Input from "../../../n1-main/m1-ui/u3-common/Input";

type mapStateToPropsType = {
    buttonName: string
    type: string
    loading: boolean
}


const Registration = (props: mapStateToPropsType) => {
    return (
        <div>
            <Input/>
            <Button loading={props.loading} type={props.type} buttonName={props.buttonName}/>

        </div>
    )
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        buttonName: state.registration.buttonName,
        type: state.login.type[0],
        loading: state.login.loading
    }
}

export default connect(mapStateToProps, null)(Registration);