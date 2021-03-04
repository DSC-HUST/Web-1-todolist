import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {loginAction} from '../../actions';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction({
            email: email,
            password: password,
        }));
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit__btn">
                    Sign in
                </button>
            </form>
        </div>
    );
};
