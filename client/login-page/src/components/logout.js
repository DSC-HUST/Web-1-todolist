import React from "react";
import { logout } from "../feature/userSlice";
import { useDispatch } from "react-redux";
const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
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

export default Logout;
