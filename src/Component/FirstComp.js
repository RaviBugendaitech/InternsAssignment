import React from "react";
import menu from "./download.png";
import logo from "./logo.png";
import "./FirstComp.css";

const FirstComp = () => {
  return (
    <div className="navigations-bar">
      <div className="header">
        <div class="topnav-left">
          <img className="logo-img" src={logo} alt="menu" />
        </div>
        <div class="topnav-right">
          <a href="/">LOGIN</a>
          <a href="/">SEARCH</a>
          <img className="logo-img" src={menu} alt="menu" />
        </div>
      </div>
      <div className="navigation">
        <a href="/">LOGIN</a>
        <a href="/MakeAccount">MAKE AN ACCOUNT</a>
      </div>
    </div>
  );
};

export default FirstComp;
