import React from "react";
import "./Category.css";
function Category({ image, categoryName }) {
  return (
    <div className="category">
      <img src={image} width={70} height={70} alt="" />
      <h2>{categoryName}</h2>
    </div>
  );
}

export default Category;
