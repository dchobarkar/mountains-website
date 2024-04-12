import React from "react";

import Tabs from "../Tabs/Tabs";
import "./Team.css";

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="team-content">
        <h2 className="team-title">
          02.
          <br /> CLIMB
        </h2>
        <p className="team-description">
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
          quis hendrerit ac...
        </p>
      </div>
      <Tabs />
    </section>
  );
};

export default Team;
