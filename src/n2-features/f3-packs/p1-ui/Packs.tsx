import React, {useCallback, useEffect} from 'react';
import classes from "./Packs.module.css";

import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {addCardsPack, getPacksT} from "../p2-bll/PacksReducer";
import Pack from "./Pack";
import Button from "../../../n1-main/m1-ui/u3-common/c2-button/Button";
import Search from './Search';

const Packs = () => {
    const {_id} = useSelector(({login}: AppStateType) => login);
    const {cardPacks} = useSelector(({packs}: AppStateType) => packs)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPacksT(_id))
    }, [_id])

    const addNewPack = useCallback(
        () => dispatch(addCardsPack()),
        []
    );

    return (
        <div className={classes.main}>
            <div className={classes.title}>Your packs</div>
            <div className={classes.header}>
                <Search/>
                <Button buttonName={'Add new pack'} buttonType={'primary'} loading={false} onClick={addNewPack}
                        buttonDisabled={false}/></div>
            <Pack/>
        </div>
    );
};

export default Packs;