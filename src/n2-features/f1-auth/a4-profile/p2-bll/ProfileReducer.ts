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

