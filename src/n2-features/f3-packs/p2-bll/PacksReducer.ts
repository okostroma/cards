import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {packsAPI} from "../p3-dal/PacksAPI";
import Cookies from "js-cookie";

const SET_PACKS = 'SET_PACKS'
const ADD_PACK = 'ADD_PACK'

export type PackType = {
    _id: string
    user_id: string
    name: string
    path: string
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
}

type initialStateType = {
    cardPacks: Array<PackType>

}
const initialState = {
    cardPacks: []
}

type ActionsType = setPacks | addPack

export const packsReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_PACKS: {
            return {
                ...state,
                cardPacks: action.packs
            }
        }
        case ADD_PACK: {
            return {
                ...state,
                cardPacks: [...state.cardPacks, action.newPack]
            }
        }
        default:
            return state;

    }
}

type setPacks = {
    type: typeof SET_PACKS,
    packs: Array<PackType>
}

type addPack = {
    type: typeof ADD_PACK,
    newPack: PackType
}
const setPacks = (packs: Array<PackType>): setPacks => ({type: SET_PACKS, packs})
const addPack = ( newPack: PackType): addPack => ({type: ADD_PACK, newPack})


export type ThunkType = ThunkAction<void, AppStateType, unknown, any>
export type ThunkDispatchType = ThunkDispatch<AppStateType, {}, any>

export const getPacksT = (userId: string): ThunkType => (dispatch: ThunkDispatchType) => {
    let token = Cookies.get('token')
    packsAPI.getPacks(userId, token)
        .then(res => {
            Cookies.set('token', res.token)
            dispatch(setPacks(res.cardPacks))
        })

}
export const addCardsPack = (): ThunkType => (dispatch: ThunkDispatchType) => {
    let token = Cookies.get('token')
    packsAPI.addPack(token)
        .then(res => {
            Cookies.set('token', res.token)
            dispatch(addPack(res.newCardsPack))
        })

}

