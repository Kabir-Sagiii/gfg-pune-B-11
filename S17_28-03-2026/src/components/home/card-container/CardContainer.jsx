import React from "react";
import Adcard from "../AdCard/Adcard";
import "./CardContainer.css";
function CardContainer() {
  return (
    <div className="card-container">
      <h1>{}</h1>
      <section className="adcard-container">
        <Adcard image={""} title={""} />
        <Adcard image={""} title={""} />
        <Adcard image={""} title={""} />
        <Adcard image={""} title={""} />
        <Adcard image={""} title={""} />
      </section>
    </div>
  );
}

export default CardContainer;
