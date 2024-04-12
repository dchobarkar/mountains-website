import React from "react";

import HeroBG from "../../assets/hero-bg.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${HeroBG})` }}
    ></section>
  );
};

export default Hero;
