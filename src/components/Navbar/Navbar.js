import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setSticky(currentScrollY > 200);
    };

    // Register the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="nav-div">
        <div className="logo">
          <img src={logo} alt="Los Angeles Mountains Logo" />
          {sticky && (
            <span>
              LOSANGELES <br /> MOUNTAINS
            </span>
          )}
        </div>

        <ul className={`nav-links ${isMobile && "mobile"}`}>
          <li>
            <a href="#history" onClick={() => setIsMobile(false)}>
              01. HISTORY
            </a>
          </li>

          <li>
            <a href="#team" onClick={() => setIsMobile(false)}>
              02. TEAM
            </a>
          </li>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={toggleMobileMenu}
          style={{ background: "none" }}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
