import React from 'react';


type OwnPropsType = {
    inputType: string
    value?: string
    onChange: () => void
}



const Input = (props: OwnPropsType) => {
    return (
        <div>
            <div>
               <input onChange={props.onChange} type={props.inputType} value={props.value}/>
            </div>
        </div>
    )
}

export default Input;