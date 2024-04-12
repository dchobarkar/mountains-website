import React from "react";

import Carousel from "../Carousel/Carousel";
import HistoryBG from "../../assets/history-bg.png";
import "./History.css";

const History = () => {
  return (
    <section id="history" className="history">
      <img src={HistoryBG} alt="History Background" className="history-bg" />

      <div className="history-overlay">
        <div className="history-box">
          <div className="history-text">
            <h2 className="history-title">01 HISTORY</h2>

            <p className="history-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default History;
