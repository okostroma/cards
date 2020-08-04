import {ThunkDispatchType, ThunkType} from "../../a1-login/l2-bll/LoginReducer";
import {profileAPI} from "../p3-dall/profileAPI";
import Cookies from 'js-cookie'

// export type UserType = {
//     _id: string;
//     email: string;
//     rememberMe: boolean;
//     isAdmin: boolean;
//
//     name: string;
//     verified: boolean;
//
//     token: string;
//     tokenDeathTime: number;
//
//     created: Date;
//     updated: Date;
// }
import {authAPI} from "../../a3-restorePassword/res3-dal/restoreAPI";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {loginAPI} from "../../a1-login/l3-dal/loginAPI";

type initialStateType = {
    loading: boolean;
    success: boolean;
    error: string;
    // user: UserType

    userId: string
    userName: string

}

const initialState: initialStateType = {
    userId: '1',
    userName: 'Oxana',
    loading: false,
    success: false,
    error: '',

    // user: {
    //     _id: '0',
    //     email: '',
    //     rememberMe: false,
    //     isAdmin: false,
    //
    //     name: 'fake',
    //     verified: false,
    //
    //     token: '',
    //     tokenDeathTime: 0,
    //
    //     created: new Date(),
    //     updated: new Date(),
    // }
};
const ProfileActions = {
    setIsAuth: (isAuth: boolean) => ({
        type: 'login/SET_SUCCESS',
        isAuth,
    } as const),
    setUser: (email: string, name: string, isAdmin:string) => ({
        type: 'login/SET_USER',
        email,
        name,
        isAdmin
    } as const),

}



const SET_USER_NAME = 'SET_USER_NAME';

export const ProfileReducer = (state: initialStateType = initialState, action : any) => {
    switch (action.type) {
        case SET_USER_NAME: {
            return {
                ...state, userName: action.userName
            }
        }
        default:
            return state

    }

export const ProfileReducer = (state: initialStateType = initialState, action: any) => {
    // switch (action.type) {
    //     case "profile/SET_TOKEN": {
    //         return {
    //             ...state,
    //             user: {
    //                 ...state.data,
    //                 token: action.token,
    //             },
    //         }
    //     }
    //     default:
            return state;
    // }
}

type SetUserNameType = {
    type: typeof SET_USER_NAME
    userName: string
}

type ThunkType = ThunkAction<void, AppStateType, unknown, any>
type DispatchThunk = ThunkDispatch<AppStateType, unknown, any>

const setUserName = (userName: string):SetUserNameType => ({type: SET_USER_NAME, userName})

// export const setUserNameThunk =(email: string, password: string, rememberMe: boolean):ThunkType => async (dispatch:DispatchThunk) => {
//     debugger
//     let res = await loginAPI.singIn(email, password, rememberMe);
//     if(res.data.success) {
//         dispatch(setUserName(email))
//     }
//
// }


    export const authMe = (token: string): ThunkType =>
         (dispatch: ThunkDispatchType) => {
            profileAPI.me(token)
                .then((res) => {
                let {email, name, isAdmin, token} = res.data
                Cookies.set('token', token)
                dispatch(ProfileActions.setIsAuth(true))
                // dispatch(ProfileActions.setUserData(email, name, isAdmin))
            })

        }

    //
    // export const logOut = (): ThunkType => (dispatch: ThunkDispatchType) => {
    //     Cookies.remove('token')
    //     dispatch(ProfileActions.setIsAuth(false))
    // }

