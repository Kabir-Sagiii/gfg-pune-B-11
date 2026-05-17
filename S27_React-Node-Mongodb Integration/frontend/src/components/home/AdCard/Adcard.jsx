import React from "react";
import "./Adcard.css";
function Adcard({ image, title }) {
  return (
    <div className="ad-card">
      <img src={image} width={"100%"} height={230} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default Adcard;
