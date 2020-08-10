import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {cardsAPI} from "../c3-dal/cardsAPI";
import Cookies from "js-cookie";
import {packsAPI} from "../../f3-packs/p3-dal/PacksAPI";

export type NewCardType = {
    answer: string
    cardsPack_id: string
    isVisible?: boolean
    created: string
    grade: number
    question: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    __v: number
    _id: string
}

type initialStateType = {
    cards: Array<NewCardType>

}
const initialState = {
    cards: []
}

const GET_CARD_PACKS = 'GET_CARD_PACKS'
const ADD_CARD = 'ADD_CARD'
const DELETE_CARD = 'DELETE_CARD'

type ActionsType = addCardType | getCardsType |deleteCardType

export const cardsReducer = (state:initialStateType= initialState, action : ActionsType) => {
    switch (action.type) {
        case GET_CARD_PACKS: {
            return {
                ...state,
                cards: action.cards
            }
        }
        case ADD_CARD: {
            return {
                ...state,
                cards: [...state.cards, action.newCard]
            }
        }
        case DELETE_CARD: {
            return {
                ...state,
                cards: state.cards.filter(c => c.cardsPack_id !== action.cardId)
            }
        }
        default:
            return state;

    }
}

type getCardsType = {
    type: typeof GET_CARD_PACKS,
    cards: Array<NewCardType>
}
type addCardType = {
    type: typeof ADD_CARD,
    newCard: NewCardType
}
type deleteCardType = {
    type: typeof DELETE_CARD,
    cardId: string
}
const getCards = (cards: Array<NewCardType>):getCardsType => ({type: GET_CARD_PACKS, cards})
const addCard = (newCard: NewCardType):addCardType => ({type: ADD_CARD, newCard})
const deleteCard = (cardId: string):deleteCardType => ({type: DELETE_CARD, cardId})


export type ThunkType = ThunkAction<void, AppStateType, unknown, any>
export type ThunkDispatchType = ThunkDispatch<AppStateType, {}, any>

export const getCardsThunk = (id: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    try {
        let token = Cookies.get('token')
        let data = await cardsAPI.getCards(id, token)
        Cookies.set('token', data.token)
        dispatch(getCards(data.cards))
    } catch (e) {
        console.log(e)
    }
 }

export const addCardT = (packId: string, question: string, answer: string): ThunkType => (dispatch: ThunkDispatchType) => {
    let token = Cookies.get('token')
    cardsAPI.addCard(packId, question, answer, token)
        .then(data => {
            Cookies.set('token', data.token)
            dispatch(addCard(data.newCard))
        })
}
export const deleteCardT = (cardId: string): ThunkType => (dispatch: ThunkDispatchType) => {
    let token = Cookies.get('token')
    cardsAPI.deleteCard(cardId, token)
        .then(data => {
            Cookies.set('token', data.token)
            dispatch(deleteCard(cardId))
        })
}