import axios from "axios";

export function getProductsService(setProducts) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((resp) => {
      //   alert("then");
      //   console.log(resp.data);
      setProducts(resp.data);
    })
    .catch((error) => {
      alert("catch");
      console.log(error);
    });
}
