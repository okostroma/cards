import React, {Component, useEffect} from 'react';
import classes from "./Pack.module.css";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../n1-main/m2-bll/store";

const Pack = React.memo( ()=> {

    const {cardPacks} = useSelector(({packs}:AppStateType) => packs)

    return (
        <div className={classes.packTable}>
            <table id='table'>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Setting</th>
                    <th>Link to cards</th>
                </tr>
                {cardPacks.map(p => <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.grade} </td>
                    <td> delete update</td>
                    <td>Link</td>
                </tr>)}
            </table>
        </div>
    );
});

export default Pack;