import { useState, useEffect } from "react";
import "./Products.css";
import { getProductsService } from "./productService";
import Product from "./Product";
import Categores from "./Categores";
function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProductsService(setProducts);
  }, []);

  return (
    <div>
      <Categores />
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
