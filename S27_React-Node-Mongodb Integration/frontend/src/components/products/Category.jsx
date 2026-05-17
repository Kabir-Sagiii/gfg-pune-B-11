import React from "react";
import "./Category.css";
import { getCategoriesData } from "./productService";
function Category({ image, categoryName, setProducts }) {
  return (
    <div
      className="category"
      onClick={() => {
        getCategoriesData(setProducts, categoryName);
      }}
    >
      <img src={image} width={70} height={70} alt="" />
      <h2>{categoryName}</h2>
    </div>
  );
}

export default Category;
