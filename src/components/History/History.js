import React from "react";

import Carousel from "../Carousel/Carousel";
import historyBackground from "../../assets/history-bg.png"; // Replace with the path to your history section background image

import "./History.css";

const History = () => {
  return (
    <section className="history">
      <img
        src={historyBackground}
        alt="History Background"
        className="history-bg"
      />
      <div className="history-overlay">
        <div className="history-text">
          <h2 className="history-title">01 HISTORY</h2>
          <p className="history-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Proin Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Proin Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Proin Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Proin Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Proin{" "}
          </p>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default History;
