import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {authAPI} from "../../f1-auth/a2-registration/r3-dal/registrAPI";
import {isFetching, isUserAuth, setServerAnswer} from "../../f1-auth/a2-registration/r2-bll/RegisterReducer";
import {cardsAPI} from "../c3-dal/cardsAPI";

type initialStateType = {
    cardPacks: Array<any>

}
const initialState = {
    cardPacks: []
}

const GET_CARD_PACKS = 'GET_CARD_PACKS'

export const cardsReducer = (state:initialStateType= initialState, action : any) => {
    switch (action.type) {
        case GET_CARD_PACKS: {
            return {
                ...state, cardPacks: action.cardPacks
            }
        }
        default:
            return state;

    }
}

type getCardsType = {
    type: typeof GET_CARD_PACKS,
    cardPacks: Array<any>
}
const getCards = (cardPacks: Array<any>):getCardsType => ({type: GET_CARD_PACKS, cardPacks})


export type ThunkType = ThunkAction<void, AppStateType, unknown, any>
export type ThunkDispatchType = ThunkDispatch<AppStateType, {}, any>

export const getCardsThunk = (token: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await cardsAPI.getCards(token);
    dispatch(getCards(response.data))
}

