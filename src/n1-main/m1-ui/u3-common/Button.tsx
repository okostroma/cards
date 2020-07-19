import React from 'react';
import classes from "./Button.module.css";

type OwnPropTypes = {
    buttonName: string
    type: string
    loading: boolean
}


const Button = (props: OwnPropTypes) => {
    let classAdd = '';
    if (props.type === 'primary' ) {
        classAdd = classes.primary;
    }
    if (props.type === 'danger' ) {
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
            <button className={classes.default + ' ' + classAdd}>{load} {props.buttonName}</button>
        </div>
    );
}

export default Button;