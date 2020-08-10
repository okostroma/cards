import React, {ChangeEvent} from 'react';
import classes from "./Input.module.css";


type OwnPropsType = {
    inputType: string
    value?: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


const Input = (props: OwnPropsType) => {
    return (
        <div className={classes.commonInput}>
            <input onChange={props.onChange} type={props.inputType} value={props.value}
                   placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;