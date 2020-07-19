import {combineReducers, createStore} from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";

const reducers = combineReducers({
    login: LoginReducer,
    registration: RegisterReducer
})


const store = createStore(reducers);


type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;

export default store;
