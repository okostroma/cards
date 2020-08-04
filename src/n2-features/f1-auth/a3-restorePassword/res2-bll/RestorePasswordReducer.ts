
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {authAPI} from "../res3-dal/restoreAPI";


type initialStateType = {
    buttonName: string
    buttonType: Array<string>
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
    serverAnswer: string
}

const initialState: initialStateType = {
    buttonName: 'Send password',
    buttonType: ['primary', 'danger'],
    loading: false,
    inputType: ['text', 'password'],
    isAuth: false,
    serverAnswer: ''
}
const SET_SERVER_ANSWER = 'RESTORE_PASSWORD/SET_SERVER_ANSWER';

const RestorePasswordReducer = (state: initialStateType = initialState, action : any) => {
    switch (action.type) {
        case SET_SERVER_ANSWER: {
            return {
                ...state, serverAnswer: action.serverAnswer
            }
        }
        default:
            return state

    }

}

type ThunkType = ThunkAction<void, AppStateType, unknown, any>
type DispatchThunk = ThunkDispatch<AppStateType, unknown, any>

type setServerAnswerType = {
    type: typeof SET_SERVER_ANSWER,
    serverAnswer: string
}
const setServerAnswer = (serverAnswer: string): setServerAnswerType => ({type: SET_SERVER_ANSWER, serverAnswer});

export const resetPasswordThunk =(email: string):ThunkType => async (dispatch:DispatchThunk) => {
    let res = await authAPI.restorePassword(email);
    if (res.success) {
        dispatch(setServerAnswer('ok'))
    } else {
        dispatch(setServerAnswer('some error'))
    }
}

export default RestorePasswordReducer;