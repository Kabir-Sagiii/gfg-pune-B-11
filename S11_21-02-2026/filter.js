var user = [10, 20, 30, 40, 50];

var filteredArray = user.filter(function (element, index) {
  var status = element < 30;

  return status;
});

console.log(filteredArray);
