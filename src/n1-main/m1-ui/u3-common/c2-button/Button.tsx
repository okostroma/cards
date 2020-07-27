import React from 'react';
import classes from "./Button.module.css";

type OwnPropTypes = {
    buttonName: string
    buttonType: string
    loading: boolean
    onClick: () => void
}


const Button = (props: OwnPropTypes) => {
    let classAdd = '';
    if (props.buttonType === 'primary' ) {
        classAdd = classes.primary;
    }
    if (props.buttonType === 'danger' ) {
        classAdd = classes.danger;
    }
    let load;
    if (props.loading) {
        load = <img alt='loading' className={classes.load}
                    src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif'/>
    }

    if (props.loading) {
        classAdd = classes.primary;
    }

    return (
        <div>
            <button className={classes.default + ' ' + classAdd} onClick={props.onClick}>{load} {props.buttonName}</button>
        </div>
    );
}

export default Button;