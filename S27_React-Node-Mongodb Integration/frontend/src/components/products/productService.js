import axios from "axios";
import { toast } from "react-toastify";

export function getProductsService(setProducts, categoryName = "all") {
  axios
    .get("http://localhost:5001/api/product/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: {
        category: categoryName.toLowerCase(),
      },
    })
    .then((resp) => {
      if (resp.data.ok) {
        setProducts(resp.data.result);
      } else {
        throw Error(resp.data.message);
      }
    })
    .catch((error) => {
      console.log("error", error.message);
      toast.error(error.message);
    });
}

export function getCategoriesData(setProducts, categoryName) {
  getProductsService(setProducts, categoryName);
}
