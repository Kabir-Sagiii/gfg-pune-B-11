import React from "react";
import "./Product.css";
function Product({ data: { image, description, title, price } }) {
  //props = {data:{image,description,price,title}}
  return (
    <div className="product-card">
      <img src={image} width={"100%"} height={230} />
      <h2>{title && title.slice(0, 21)}</h2>
      <p>${price}</p>
      <p>{description && description.slice(0, 80)}</p>
      <button>Product Details</button>
    </div>
  );
}

export default Product;
