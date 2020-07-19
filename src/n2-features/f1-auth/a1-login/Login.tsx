import React from 'react';
import {connect, useSelector} from 'react-redux';
import {AppStateType} from "../../../n1-main/m2-bll/store";
import Button from "../../../n1-main/m1-ui/u3-common/Button";
import Input from "../../../n1-main/m1-ui/u3-common/Input";


type mapStateToPropsType = {
    buttonName: string
    type: string
    loading: boolean
}

const Login = (props: mapStateToPropsType) => {



    return (
        <div>
            <Input/>
            <Button loading={props.loading} type={props.type} buttonName={props.buttonName}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        buttonName: state.login.buttonName,
        type: state.login.type[0],
        loading: state.login.loading
    }
}

export default connect(mapStateToProps, null)(Login);