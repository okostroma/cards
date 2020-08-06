import {applyMiddleware, combineReducers, createStore} from "redux";
import {LoginReducer} from "../../n2-features/f1-auth/a1-login/l2-bll/LoginReducer";
import {RegisterReducer} from "../../n2-features/f1-auth/a2-registration/r2-bll/RegisterReducer";
import {RestorePasswordReducer} from "../../n2-features/f1-auth/a3-restorePassword/res2-bll/RestorePasswordReducer";
import {ProfileReducer} from "../../n2-features/f1-auth/a4-profile/p2-bll/ProfileReducer";
import thunk from "redux-thunk";
import {cardsReducer} from "../../n2-features/а2-cards/c2-bll/cardsReducer";
import {packsReducer} from "../../n2-features/f3-packs/p2-bll/PacksReducer";



const reducers = combineReducers({
    login: LoginReducer,
    registration: RegisterReducer,
    restore: RestorePasswordReducer,
    profile: ProfileReducer,
    cards: cardsReducer,
    packs: packsReducer
})


const store = createStore(reducers, applyMiddleware(thunk));

type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;

export default store;
