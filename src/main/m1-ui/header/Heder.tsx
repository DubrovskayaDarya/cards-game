import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import {PATH} from "../main/Main";


export const Header = () => {
     return(
         <header className={style.header}>
             <NavLink to={PATH.login}>Login</NavLink>
             <NavLink to={PATH.register}>Register</NavLink>
             <NavLink to={PATH.profile}>Profile</NavLink>
             <NavLink to={PATH.password_recovery}>Password Recovery</NavLink>
             <NavLink to={PATH.new_password}>New Password</NavLink>
             <NavLink to={PATH.testing}>Testing</NavLink>
             <NavLink to={PATH.not_found}>404</NavLink>
         </header>
     )
}