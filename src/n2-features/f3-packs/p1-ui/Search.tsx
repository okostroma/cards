import React, {useEffect, useState} from 'react';
import Input from "../../../n1-main/m1-ui/u3-common/c3-input/Input";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../n1-main/m2-bll/store";

const Search = () => {
    const [search, setSearch] = useState("");
    const {cardPacks} = useSelector(({packs}:AppStateType) => packs)
    const [filtered, setFiltered] = useState(cardPacks);

    useEffect(() => {
        setFiltered(cardPacks.filter(pack =>
            pack.name.toLowerCase().includes(search.toLowerCase())
        ))
    }, [search, cardPacks]);
    return (
        <div>
            <Input inputType='text' onChange={e => setSearch(e.target.value)} placeholder={'Search...'}/>
        </div>
    );
};

export default Search;