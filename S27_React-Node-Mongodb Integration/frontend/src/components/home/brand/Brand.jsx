import React from "react";
import "./Brand.css";
function Brand({ image }) {
  return (
    <div className="brand">
      <img src={image} width={"100%"} height={400} alt="" />
    </div>
  );
}

export default Brand;
