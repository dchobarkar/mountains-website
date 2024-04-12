import React, { useState } from "react";

import mountain1 from "../../assets/tab-1.jpg";
import mountain2 from "../../assets/tab-2.jpg";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tabs">
      <div className="tab-titles">
        <button
          className={`tab-title ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => setActiveTab("tab1")}
        >
          MOUNTAIN 1
        </button>
        <button
          className={`tab-title ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => setActiveTab("tab2")}
        >
          MOUNTAIN 2
        </button>
      </div>
      <div
        className={`tab-panel ${activeTab === "tab1" ? "active" : ""}`}
        style={{ backgroundImage: `url(${mountain1})` }}
      >
        <div className="tab-content-box">
          <div className="tab-content">
            <div className="tab-table">
              <h3>SCHEDULE</h3>
              <ul className="schedule-list">
                <li>
                  <span>25 Nov 2016</span> Vestibulum viverra
                </li>
                <li>
                  <span>28 Nov 2016</span> Vestibulum viverra
                </li>
                <li>
                  <span>18 Dec 2016</span> Vestibulum viverra
                </li>
                <li>
                  <span>7 Jan 2017</span> Vestibulum viverra
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`tab-panel ${activeTab === "tab2" ? "active" : ""}`}
        style={{ backgroundImage: `url(${mountain2})` }}
      >
        <div className="tab-content-box">
          <div className="tab-content">
            <div className="tab-table">
              <h3>SCHEDULE</h3>
              <ul className="schedule-list">
                <li>
                  <span>17 Nov 2016</span> Vestibulum viverra
                </li>
                <li>
                  <span>13 Dec 2016</span> Vestibulum viverra
                </li>
                <li>
                  <span>28 Dec 2016</span> Vestibulum viverra
                </li>
                <li>
                  <span>9 Feb 2017</span> Vestibulum viverra
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
