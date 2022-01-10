import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/profile'}>Profile</Link></li>
            <li><Link to={'/newPassword'}>New Password</Link></li>
            <li><Link to={'/resetPassword'}>Reset Password</Link></li>
            <li><Link to={'/register'}>Register</Link></li>
            <li><Link to={'/test'}>Test</Link></li>
        </ul>
    )
}

export default Navbar