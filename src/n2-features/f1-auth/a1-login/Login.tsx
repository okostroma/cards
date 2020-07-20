import React from 'react';
import {connect, useSelector} from 'react-redux';
import {AppStateType} from "../../../n1-main/m2-bll/store";
import Button from "../../../n1-main/m1-ui/u3-common/Button";
import Input from "../../../n1-main/m1-ui/u3-common/Input";


type mapStateToPropsType = {
    buttonName: string
    buttonType: string
    loading: boolean
    inputType: Array<string>
}

const Login = (props: mapStateToPropsType) => {



    return (
        <div>
            <div>
                Login <Input inputType={props.inputType[0]}/>
            </div>
            <div>
                Password <Input inputType={props.inputType[1]}/>
            </div>

            <Button loading={props.loading} buttonType={props.buttonType} buttonName={props.buttonName}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        buttonName: state.login.buttonName,
        buttonType: state.login.buttonType[0],
        loading: state.login.loading,
        inputType: state.login.inputType
    }
}

export default connect(mapStateToProps, null)(Login);