var obj1 = {
  name: "Sagar",
  gender: "male",
  email: "sagar@gmail.com",
};

var obj2 = {
  id: 101,
  ...obj1,
  city: "pune",
  name: "Sagar Jaiswal",
};

var arr1 = [10, 20, "sagar", true, { name: "S1" }];
var arr2 = [...arr1];

console.log(arr1);
console.log();
console.log(arr2);
