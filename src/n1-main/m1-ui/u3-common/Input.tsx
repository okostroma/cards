import React from 'react';


type OwnPropsType = {
    inputType: string
}



const Input = (props: OwnPropsType) => {
    return (
        <div>
            <div>
               <input type={props.inputType}/>
            </div>
        </div>
    )
}

export default Input;