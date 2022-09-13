import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginPageReducer} from "../b2-reducers/loginPage-reducer";
import {registerPageReducer} from "../b2-reducers/registerPage-reducer";
import {passwordRecoveryPageReducer} from "../b2-reducers/password-recovery-reducer";
import {newPasswordPageReducer} from "../b2-reducers/newPassword";
import {testingPageReducer} from "../b2-reducers/testingPage-reducer";
import {profilePageReducer} from "../b2-reducers/profile-reducer";

const rootReducer = combineReducers({
    login: loginPageReducer,
    register: registerPageReducer,
    profile: profilePageReducer,
    passwordRecovery: passwordRecoveryPageReducer,
    newPassword: newPasswordPageReducer,
    testingPage: testingPageReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;