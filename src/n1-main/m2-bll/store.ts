import {applyMiddleware, combineReducers, createStore} from "redux";
import LoginReducer from "../../n2-features/f1-auth/a1-login/l2-bll/LoginReducer";
import RegisterReducer from "./RegisterReducer";
import RestorePasswordReducer from "./RestorePasswordReducer";
import ProfileReducer from "./ProfileReducer";
import thunk from "redux-thunk";



const reducers = combineReducers({
    login: LoginReducer,
    registration: RegisterReducer,
    restore: RestorePasswordReducer,
    profile: ProfileReducer
})


const store = createStore(reducers, applyMiddleware(thunk));


type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;

export default store;
