import React from "react";
import { Component } from "react";
import "./Navbar2.css";
const Navbar2 = () => {
  return (
    <div className="main-container">
      <div className="round-container">
        <div className="shift-left">
          <div className="set-bg">
            <div className="changepass">
              CHANGE PASSWORD</div>
             <div className="email">
              NEW PASSWORD
              <div className="search-bar">
                <input
                  class="search"
                  type="text"
                  placeholder="Enter your new password"
                />
              </div>
            </div>
            <div className="email">
              CONFIRM NEW PASSWORD
              <div className="search-bar">
                <input
                  class="search"
                  type="text"
                  placeholder="Confirm your new password"
                />
              </div>
            </div>
        
          </div>

          <div className="left-button">
            <span className="arrows-back">&#8594;</span>
            <div className="login">SUBMIT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
