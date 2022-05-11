import React from "react";
import "./MainCard.css";
const MainCard = () => {
  return (
    <div className="main-container">
      <div className="round-container">
        <div className="shift-left">
          <div className="email">
            EMAIL
            <div className="search-bar">
              <input
                class="search"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="email">
            PASSWORD
            <div className="search-bar">
              <input
                class="search"
                type="text"
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <a href="/"> FORGOT PASSWORD?</a>

          <button className="left-button">
            <span className="arrows-back">&#8594;</span>
            <div className="login">LOGIN</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
