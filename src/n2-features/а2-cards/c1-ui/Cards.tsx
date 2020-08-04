import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';

import classes from "./Cards.module.css";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import { getCardsThunk } from '../c2-bll/cardsReducer';




export const Cards = () => {
    const cards: any = useSelector<AppStateType>(state => state.cards.cardPacks)
    const token: any = useSelector<AppStateType>(state => state.login.token)
    const dispatch = useDispatch();


    const getCards = () => {
        dispatch(getCardsThunk(token))
    }


    return (

        <div>
            <button onClick={getCards}>Get cards</button>
            {cards}


        </div>
    )

}
