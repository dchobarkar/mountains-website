// src/components/Footer/Footer.js

import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.png"; // Replace with your logo's actual import path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          src={logo}
          alt="Los Angeles Mountains Logo"
          className="footer-logo"
        />
        <p className="footer-text">COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
