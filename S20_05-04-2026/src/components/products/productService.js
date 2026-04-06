import axios from "axios";

export function getProductsService(setProducts) {
  axios
    .get("https://dummyjson.com/products")
    .then((resp) => {
      //   alert("then");
      console.log(resp.data);
      setProducts(resp.data.products);
    })
    .catch((error) => {
      alert("catch");
      console.log(error);
    });
}
