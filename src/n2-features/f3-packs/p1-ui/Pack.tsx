import React from 'react';
import classes from "./Pack.module.css";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import del from '../../../0n-assets/icons8-delete-50.png';
import update from '../../../0n-assets/icons8-update-left-rotation-50.png';
import {NavLink} from "react-router-dom";

type Props = {
    deletePack: (packId: string) => void
}
export const Pack = React.memo(({deletePack}: Props) => {

    const {cardPacks} = useSelector(({packs}: AppStateType) => packs)

    return (
        <div className={classes.packTable}>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Setting</th>
                    <th>Links</th>
                </tr>
                {cardPacks.map(p => <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.grade} </td>
                    <td>
                        <img onClick={() => deletePack(p._id)} src={del} alt="delete"/>
                        <img src={update} alt="delete"/>
                    </td>
                    <td className={classes.links}>
                        <NavLink to={`/card/${p._id}`}>Cards </NavLink>
                        <NavLink to={`/card`}> Learn</NavLink>
                    </td>
                </tr>)}
            </table>
        </div>
    );
});

