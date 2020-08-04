import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {commonActionsType} from "../../../../n1-main/m2-bll/actions";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {loginAPI} from "../l3-dal/loginAPI";
import Cookies from "js-cookie";
import {profileAPI} from "../../a4-profile/p3-dall/profileAPI";

type loginStateType = {
    buttonName: string
    buttonType: Array<string>
    inputType: Array<string>
    value: string

    loading: boolean
    isAuth: boolean
    error: string
    userName: string
    token: string
    email: string
}

const loginInitialState: loginStateType = {
    buttonName: 'Sign in',
    buttonType: ['primary', 'danger'],
    inputType: ['text', 'password', 'checkbox'],
    value:'',
    loading: false,
    isAuth: false,
    error: '',
    userName: '',
    token: ''
    email: '',
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
                Cookies.set('token',res.data.token)
                const token = Cookies.get('token')
                dispatch(LoginActions.setSuccess(true))
                dispatch(LoginActions.setLoading(false))
                dispatch(LoginActions.setUserName(res.data.name))
                dispatch(LoginActions.setToken(res.data.token))
            }
        }catch (e) {
            dispatch(LoginActions.setLoading(false))
        } catch (e) {
            dispatch(LoginActions.setError(e.response.data.error));
        }
    };


export const authMe = (token: string): ThunkType =>
    (dispatch: ThunkDispatchType) => {
        profileAPI.me(token)

            .then((res) => {
                debugger
                let token = res.data.token
                Cookies.set('token', token)
                dispatch(LoginActions.setSuccess(true))
            })

    }
export const logOut = (): ThunkType => (dispatch: ThunkDispatchType) => {
            Cookies.remove('token')
            dispatch(LoginActions.setSuccess(false))

}
