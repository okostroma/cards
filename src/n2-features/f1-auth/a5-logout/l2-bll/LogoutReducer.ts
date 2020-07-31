import {commonActionsType} from "../../../../n1-main/m2-bll/actions";
import {ThunkDispatchType, ThunkType} from "../../a1-login/l2-bll/LoginReducer";
import Cookies from "js-cookie";

type loginStateType = {}

const loginInitialState: loginStateType = {}
const LoginActions = {}

type LoginActionsType = commonActionsType<typeof LoginActions>;

export const LogoutReducer = (state: loginStateType = loginInitialState, action: LoginActionsType): loginStateType => {
    switch (action.type) {
        default:
            return state
    }

}
// export const logOut = (): ThunkType => (dispatch: ThunkDispatchType) => {
//     Cookies.remove('token')
//     dispatch(ProfileActions.setIsAuth(false))
// }
