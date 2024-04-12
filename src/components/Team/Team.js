import React from "react";

import Tabs from "../Tabs/Tabs";
import "./Team.css";

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="team-content">
        <h2 className="team-title">
          <span>02.</span> CLIMB
        </h2>
        <p className="team-description">
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, quis
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, quis
          hendrerit ac...
        </p>
      </div>
      <Tabs />
    </section>
  );
};

export default Team;
