import React from "react";
import img1 from '../Images/icon-left.png';
import { Component } from "react";
import "./Navbar1.css";
import { GoGrabber } from "react-icons/go";
const Navbar1 = () => {
  return (
    <div className="navigation-bar">
      <div className="header">
      <img className="logo-img" src={img1} alt="img1" />
        <div class="topnav-right">
          <a href="/">Login</a>
          <a href="/">Search</a>
          <a href="/"><GoGrabber/></a>
        </div>
      </div>
      <div className="navigation">
        <a href="/">LOGIN</a>
        <a href="/">MAKE AN ACCOUNT</a>
      </div>
    </div>
  );
};

export default Navbar1;