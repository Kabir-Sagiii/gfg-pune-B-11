var product = {
  pname: "acer laptop",
  price: 89766,
  inStock: true,
  display: function (pname, price, inStock) {
    console.log(pname, price, inStock);
  },
};

product.display(product.pname, product.price, product.inStock);

console.log();
