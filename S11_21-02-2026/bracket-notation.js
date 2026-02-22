var product = {
  pName: "Iphone 17",
  price: 90000,
  rating: 4.5,
  //instock : true
};
var key = "price";
//Insert
product[key] = false;

//Modify
product[key] = 95000;

//Remove
delete product["rating"];

console.log(product);
