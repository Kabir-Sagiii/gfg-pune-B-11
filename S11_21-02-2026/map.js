var user = [10, 20, 30, 40, 50];

var newArray = user.map(function (element, index) {
  var result = element * 100; //20*100 = 2000
  return result; // [1000,2000,3000,4000,5000]
});

console.log(newArray);
