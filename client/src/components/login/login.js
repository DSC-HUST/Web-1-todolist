import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../actions";
import "./login.css";
import { ReactComponent as ReactImg } from "./img.svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginAction({
        email: email,
        password: password,
      })
    );
  };

  return (
    <div className="parent">
      <div className="child1">
        <h1>Sign in</h1>
        <h2>Welcome to ToDoList</h2>
        <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="inputName"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputPassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit__btn">
            <h1 className="Sign_in">Sign in</h1>
          </button>
        </form>
      </div>
      <div className="child2">
        <ReactImg className="React_Img" />
      </div>
    </div>
  );
};
