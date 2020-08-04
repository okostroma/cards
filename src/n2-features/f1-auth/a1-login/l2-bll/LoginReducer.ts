import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {commonActionsType} from "../../../../n1-main/m2-bll/actions";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {loginAPI} from "../l3-dal/loginAPI";

type loginStateType = {
    buttonName: string
    buttonType: Array<string>
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
    error: string
    userName: string
    token: string
}

const loginInitialState: loginStateType = {
    buttonName: 'Sign in',
    buttonType: ['primary', 'danger'],
    loading: false,
    inputType: ['text', 'password', 'checkbox'],
    isAuth: false,
    error: '',
    userName: '',
    token: ''
}
const LoginActions = {
    setSuccess: (isAuth: boolean) => ({
        type: 'login/SET_SUCCESS',
        isAuth,
    } as const),
    setError: (error: string) => ({
        type: 'login/SET_ERROR',
        error,
    } as const),
    setLoading: (loading: boolean) => ({
        type: 'login/SET_LOADING',
        loading,
    } as const),
    setUserName: (userName: string) => ({
        type: 'SET_USER_NAME',
        userName
    } as const),
    setToken: (token:string) => ({
        type: 'SET_TOKEN',
        token
    } as const)
}

type LoginActionsType = commonActionsType<typeof LoginActions>;

export const LoginReducer = (state: loginStateType = loginInitialState, action: LoginActionsType): loginStateType => {
    switch (action.type) {
        case 'login/SET_SUCCESS': {
            return {
                ...state,
                isAuth: action.isAuth,
                loading: false,
                error: ''
            }
        }
        case 'login/SET_ERROR': {
            return {
                ...state,
                error: action.error,
                loading: false,
                isAuth: false,
            }
        }
        case 'login/SET_LOADING': {
            return {
                ...state,
                error: '',
                loading: action.loading,
                isAuth: false,
            }
        }
        case 'SET_USER_NAME': {
            return {
                ...state, userName: action.userName
            }
        }
        case 'SET_TOKEN': {
            return {
                ...state, token: action.token
            }
        }
        default:
            return state
    }

}

export type ThunkType = ThunkAction<void, AppStateType, unknown, LoginActionsType>
export type ThunkDispatchType = ThunkDispatch<AppStateType, {}, LoginActionsType>

export const singIn = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: ThunkDispatchType) => {
        dispatch(LoginActions.setLoading(true))
        try {
            const res = await loginAPI.singIn(email, password, rememberMe)
            if (res.data) {

                dispatch(LoginActions.setSuccess(true))
                dispatch(LoginActions.setLoading(false))
                dispatch(LoginActions.setUserName(res.data.name))
                dispatch(LoginActions.setToken(res.data.token))
            }
        }catch (e) {
            dispatch(LoginActions.setLoading(false))
            dispatch(LoginActions.setError(e.response.data.error));

        }
    };

