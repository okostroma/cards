import {commonActionsType} from "../../../../n1-main/m2-bll/actions";

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
