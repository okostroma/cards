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
    // success: boolean
    error: string
}

const loginInitialState: loginStateType = {
    buttonName: 'Sign in',
    buttonType: ['primary', 'danger'],
    loading: false,
    inputType: ['text', 'password', 'checkbox'],
    isAuth: false,
    error: '',
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
}

type LoginActionsType = commonActionsType<typeof LoginActions>;

const LoginReducer = (state: loginStateType = loginInitialState, action: LoginActionsType): loginStateType => {
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
        default:
            return state
    }

}

export default LoginReducer

export type ThunkType = ThunkAction<void, AppStateType, unknown, LoginActionsType>
export type ThunkDispatchType = ThunkDispatch<AppStateType, {}, LoginActionsType>

export const singIn = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: ThunkDispatchType) => {
    const res = await loginAPI.singIn(email, password, rememberMe)
        if(res.data){
            dispatch(LoginActions.setSuccess(true))
        }else {
            dispatch(LoginActions.setError(res.data.error));
        }
};
