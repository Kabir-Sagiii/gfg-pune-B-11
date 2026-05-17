import React from "react";
import "./Categores.css";
import Category from "./Category";
function Categores({ setProducts }) {
  return (
    <div className="categories">
      <Category
        setProducts={setProducts}
        image={
          "https://cdn.textstudio.com/output/sample/normal/9/2/0/5/all-logo-73-5029.png"
        }
        categoryName={"All"}
      />
      <Category
        setProducts={setProducts}
        image={
          "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
        }
        categoryName={"Beauty"}
      />
      <Category
        setProducts={setProducts}
        image={
          "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
        }
        categoryName={"Furniture"}
      />
      <Category
        setProducts={setProducts}
        image={
          "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
        }
        categoryName={"Groceries"}
      />
      <Category
        setProducts={setProducts}
        image={
          "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
        }
        categoryName={"Fragrances"}
      />
    </div>
  );
}

export default Categores;
