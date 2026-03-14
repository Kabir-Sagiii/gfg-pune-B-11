var product = {
  pname: "Iphone 17",
  price: 90000,
  rating: 4.7,
  reviews: {
    user1: "Good Product",
    user2: "Best Performance",
    user3: "---",
  },
};

//destructuring
var {
  pname,
  rating,
  price,
  reviews: { user1, user3 },
} = product;

function f1() {
  console.log(rating); //4.7

  console.log(pname);

  console.log(user3);
}

f1();
