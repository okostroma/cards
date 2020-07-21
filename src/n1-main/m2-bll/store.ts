import {combineReducers, createStore} from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import RestorePasswordReducer from "./RestorePasswordReducer";
import ProfileReducer from "./ProfileReducer";

const reducers = combineReducers({
    login: LoginReducer,
    registration: RegisterReducer,
    restore: RestorePasswordReducer,
    profile: ProfileReducer
})


const store = createStore(reducers);


type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;

export default store;
