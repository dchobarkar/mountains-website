import React from "react";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import History from "./History/History";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Hero />
      <History />
      <Team />
      <Footer />
    </div>
  );
};

export default Layout;
