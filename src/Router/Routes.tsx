import React from "react";
import {Route, Routes} from "react-router-dom";
import TestPage from "../Components/Pages/TestPage";
import Login from "../Components/Pages/Login";
import Profile from "../Components/Pages/Profile";
import Register from "../Components/Pages/Register";
import Error404 from "../Components/Pages/Error404";
import NewPassword from "../Components/Pages/NewPassword";
import ResetPassword from "../Components/Pages/ResetPassword";


export const Router = () => {
    return(
        <Routes>
            <Route path={'/test'} element={<TestPage/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/404'} element={<Error404/>}/>
            <Route path={'/newPassword'} element={<NewPassword/>}/>
            <Route path={'/resetPassword'} element={<ResetPassword/>}/>
        </Routes>
    )
}
