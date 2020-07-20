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
}


const Registration = (props: mapStateToPropsType) => {
    return (
        <div>
            <div>
                Your name <Input inputType={props.inputType[0]}/>
            </div>
            <div>
                Your e-mail <Input inputType={props.inputType[0]}/>
            </div>
            <div>
                Your password <Input inputType={props.inputType[1]}/>
            </div>

            <Button loading={props.loading} buttonType={props.buttonType} buttonName={props.buttonName}/>

        </div>
    )
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        buttonName: state.registration.buttonName,
        buttonType: state.registration.buttonType[0],
        loading: state.registration.loading,
        inputType: state.registration.inputType
    }
}

export default connect(mapStateToProps, null)(Registration);