var data = [
  {
    brand: "Apple",
    model: "Iphone 17",
    price: 95000,
  },
  {
    brand: "Apple",
    model: "Iphone 16",
    price: 75000,
  },
  {
    brand: "Samsung",
    model: "galaxy ultra",
    price: 85000,
  },
  {
    brand: "Vivo",
    model: "vivo s29",
    price: 40000,
  },
];

var iphoneMobiles = data.filter(function (element) {
  //   var status = element.brand == "Apple";
  var status = element.price > 80000 && element.brand === "Apple";
  return status; //[{--},{---}]
});

console.log(iphoneMobiles);
