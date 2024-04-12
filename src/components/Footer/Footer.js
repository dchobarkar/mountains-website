import React from "react";

import logo from "../../assets/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
          <img
            src={logo}
            alt="Los Angeles Mountains Logo"
            className="footer-logo"
          />
          <span>
            LOSANGELES <br /> MOUNTAINS
          </span>
        </div>

        <p className="footer-text">COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
