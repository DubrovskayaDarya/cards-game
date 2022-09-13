import React from "react";
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../../../features/f1-auth/a1-login/LoginPage";
import {RegisterPage} from "../../../features/f1-auth/a2-register/RegisterPage";
import {PasswordRecoveryPage} from "../../../features/f1-auth/a4-password-recovery/PasswordRecovery";
import {NewPasswordPage} from "../../../features/f1-auth/a5-new-password/NewPassword";
import {NotFoundPage} from "../../../features/f1-auth/a3-404/NotFoundPage";
import {TestingPage} from "../../../features/f1-auth/a0-testing-page/TestingPage";
import {Profile} from "../../../features/f1-auth/a6-profile/Profile";

export const PATH = {
    default: '/',
    login: '/login',
    register: '/register',
    profile: '/profile',
    password_recovery: '/password-recovery',
    new_password: '/new-password',
    testing: '/testing',
    not_found: '/*'
}

export const Main = () => {

    return(
        <div>
            <Routes>
                <Route path={PATH.default} element={<LoginPage/>}/>
                <Route path={PATH.login} element={<LoginPage/>}/>
                <Route path={PATH.register} element={<RegisterPage/>}/>
                <Route path={PATH.profile} element={<Profile/>}/>
                <Route path={PATH.password_recovery} element={<PasswordRecoveryPage/>}/>
                <Route path={PATH.new_password} element={<NewPasswordPage/>}/>
                <Route path={PATH.testing} element={<TestingPage/>}/>
                <Route path={PATH.not_found} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}