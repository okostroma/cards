import React, {ChangeEvent} from 'react';


type OwnPropsType = {
    inputType: string
    value?: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}



const Input = (props: OwnPropsType) => {
    return (
        <div>
            <div>
               <input onChange={props.onChange}  type={props.inputType} value={props.value} placeholder={props.placeholder}/>
            </div>
        </div>
    )
}

export default Input;