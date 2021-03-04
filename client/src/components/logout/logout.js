import React from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from '../../actions';

export const Logout = () => {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutAction());
    };
    
    return (
        <div>
        <h1>Welcome!</h1>
        <button className="logout__button" onClick={(e) => handleLogout(e)}>
            Log out
        </button>
        </div>
    );
};