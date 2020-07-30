import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./store";
import {authAPI} from "../m3-dal/api";

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
    buttonName: 'Sign up',
    buttonType: ['primary', 'danger'],
    loading: false,
    inputType: ['text', 'password'],
    isAuth: false,
    serverAnswer: ''
}

const IS_FETCHING = 'REGISTRATION/IS_FETCHING';
const IS_USER_AUTH = 'REGISTRATION/IS_USER_AUTH';
const SET_SERVER_ANSWER = 'REGISTRATION/SET_SERVER_ANSWER';



const RegisterReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case IS_FETCHING: {
            return {
                ...state, loading: action.loading
            }
        }
        case IS_USER_AUTH : {
            return {
                ...state, isAuth: action.isAuth
            }
        }
        case SET_SERVER_ANSWER : {
            return {
                ...state, serverAnswer: action.serverAnswer
            }
        }

        default:
            return state;
    }

}

type ActionType = isFetchingType | isUserAuthType | setServerAnswerType;

type isFetchingType = {
    type: typeof IS_FETCHING,
    loading: boolean
}
export const isFetching = (loading: boolean): isFetchingType => ({type: IS_FETCHING, loading});

type isUserAuthType = {
    type: typeof IS_USER_AUTH,
    isAuth: boolean
}
export const isUserAuth = (isAuth: boolean): isUserAuthType => ({type: IS_USER_AUTH, isAuth});

type setServerAnswerType = {
    type: typeof SET_SERVER_ANSWER,
    serverAnswer: string
}

export const setServerAnswer = (serverAnswer: string): setServerAnswerType => ({type: SET_SERVER_ANSWER, serverAnswer});


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>
type DispatchThunk = ThunkDispatch<AppStateType, unknown, ActionType>


export const registrationThunk = (email: string, password: string): ThunkType => async (dispatch: DispatchThunk) => {
    dispatch(isFetching(true));
    let response = await authAPI.registration(email, password);
    if (response.success === true) {
        dispatch(isFetching(false));
        dispatch(isUserAuth(true));
        dispatch(setServerAnswer('ok'))
    } else {
        dispatch(setServerAnswer('some error'))
        console.log('Such a user has already been created')
        dispatch(isFetching(false));
    }
}


export default RegisterReducer;