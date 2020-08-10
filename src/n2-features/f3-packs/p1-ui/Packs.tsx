import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import classes from "./Packs.module.css";
import search from '../../../0n-assets/icons8-search-50.png';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {addCardsPack, deleteCardsPack, getPacksT} from "../p2-bll/PacksReducer";
import {Pack} from "./Pack";
import Button from "../../../n1-main/m1-ui/u3-common/c2-button/Button";
import Search from '../../../n1-main/m1-ui/u3-common/c4-search/Search';
import Input from "../../../n1-main/m1-ui/u3-common/c3-input/Input";

export const Packs = React.memo(() => {
    const {_id} = useSelector(({login}: AppStateType) => login);
    const {cardPacks} = useSelector(({packs}: AppStateType) => packs)
    const [title, setTitle] = useState<string>('')

    const dispatch = useDispatch()

    useEffect(
        () => {dispatch(getPacksT(_id))},
        [_id])

    const deletePack = useCallback(
        (packId) => dispatch(deleteCardsPack(packId)),
        []
    )
    const addNewPack = useCallback(
        (name) => dispatch(addCardsPack(name)),
        []
    )

    const onAddItemClick = () => {
        let newTitle = title.trim();
        setTitle('')
        addNewPack && addNewPack(newTitle)

    }

    const setTitleCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => setTitle(e.currentTarget.value), [setTitle]);


    return (
        <div className={classes.main}>
            <div className={classes.title}>Your packs</div>
            <div className={classes.header}>
                <Search/>
                <img src={search} alt="search"/>
            </div>
            <div className={classes.header}>
                <Input inputType={'text'} onChange={setTitleCallback} placeholder={'Entry pack name...'} value={title}/>
                <Button buttonName={'Add new pack'} buttonType={'primary'} loading={false} onClick={onAddItemClick}
                        buttonDisabled={false}/>
            </div>
            <Pack deletePack={deletePack}/>
        </div>
    );
});
