import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as ReactLogo } from "./login/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <ReactLogo />
      </div>
    </nav>
  );
};
export default Navbar;
