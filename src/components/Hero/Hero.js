// src/components/Hero/Hero.js

import React from "react";
import "./Hero.css";
import heroImageWithText from "../../assets/hero-image.png"; // Replace with your actual hero image path that includes the text

const Hero = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroImageWithText})` }}
    >
      {/* Additional content, if needed, can go here */}
    </div>
  );
};

export default Hero;
