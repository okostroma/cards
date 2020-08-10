import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../n1-main/m2-bll/store';
import del from "../../../0n-assets/icons8-delete-50.png";
import classes from './Card.module.css';


type Props = {
    deleteCard: (cardId: string) => void
}

export const Card = React.memo(({deleteCard}: Props) => {

    const {cards} = useSelector(({cards}: AppStateType) => cards)


    return (

        <div className={classes.cardTable}>
            <table>
                <tr>
                    <th>question</th>
                    <th>answer</th>
                    <th>Setting</th>
                </tr>
                {cards.map(c =>
                    <tr>
                        <td>{c.question}</td>
                        <td>{c.answer} </td>
                        <td>
                            <img onClick={() => deleteCard(c._id)} src={del} alt="delete"/>
                        </td>
                    </tr>)}
            </table>
        </div>
    )
});
