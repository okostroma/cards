import React from "react";
import classes from './PreLoader.module.css'


const PreLoader = (props) => {


    return <div className={`${classes.loader} ${classes.loaderItem}`}>
            <span> </span>
            <span> </span>
            <span> </span>
        </div>


}


export default PreLoader;

