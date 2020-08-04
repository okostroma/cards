import {authAPI} from "../../a3-restorePassword/res3-dal/restoreAPI";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {loginAPI} from "../../a1-login/l3-dal/loginAPI";

type initialStateType = {
    userId: string
    userName: string

}

const initialState: initialStateType = {
    userId: '1',
    userName: 'Oxana'
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


