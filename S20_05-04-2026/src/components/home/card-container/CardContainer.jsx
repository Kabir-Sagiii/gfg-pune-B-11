import React from "react";
import Adcard from "../AdCard/Adcard";
import "./CardContainer.css";
function CardContainer({ info }) {
  console.log(info);
  const {
    title,
    adCardData: [adcard1, adcard2, adcard3, adcard4, adcard5],
  } = info;
  return (
    <div className="card-container">
      <h1>{title}</h1>
      <section className="adcard-container">
        <Adcard image={adcard1.image} title={adcard1.offerTitle} />
        <Adcard image={adcard2.image} title={adcard2.offerTitle} />
        <Adcard image={adcard3.image} title={adcard3.offerTitle} />
        <Adcard image={adcard4.image} title={adcard4.offerTitle} />
        <Adcard image={adcard5.image} title={adcard5.offerTitle} />
      </section>
    </div>
  );
}

export default CardContainer;
