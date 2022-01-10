import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {profilePageReducer} from "./profile-page-reducer";
import {loginPageReducer} from "./login-page-reducer";
import {registerPageReducer} from "./register-page-reducer";
import {newPasswordReducer} from "./new-password-reducer";
import {resetPasswordReducer} from "./reset-password-reducer";

const RootReducer = combineReducers({
    profilePage: profilePageReducer,
    loginPage: loginPageReducer,
    registerPage: registerPageReducer,
    newPasswordPage: newPasswordReducer,
    resetPassword: resetPasswordReducer
})


export let store = createStore(RootReducer, applyMiddleware(thunkMiddleware))

export type  RootReducerType = ReturnType<typeof store.getState>
//@ts-ignore
console.log(window.store = store)