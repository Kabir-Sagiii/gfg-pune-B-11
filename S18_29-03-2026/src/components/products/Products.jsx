import { useState } from "react";
import "./Products.css";
import { getProductsService } from "./productService";
import Product from "./Product";
function Products() {
  const [products, setProducts] = useState(null);
  return (
    <div>
      <h1>All Products Information</h1>
      <button
        onClick={() => {
          getProductsService(setProducts);
        }}
      >
        Get PRoducts
      </button>

      <div className="product-container">
        {products &&
          products.map((product) => {
            return <Product data={product} />;
          })}
      </div>
    </div>
  );
}

export default Products;
