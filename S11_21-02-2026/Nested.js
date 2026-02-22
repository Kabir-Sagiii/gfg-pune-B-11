var user = {
  name: {
    title: "Mr",
    firstName: "Raj",
    lastName: "Sharma",
  },
  address: {
    city1: {
      cityName: "pune",
      pincode: 1234,
    },
    city2: {
      cityName: "mumbai",
      pincode: 98765,
    },
  },
};

// console.log(user.name.firstName);

console.log(user.address.city1.pincode);

console.log(user["address"]["city1"]["pincode"]);
