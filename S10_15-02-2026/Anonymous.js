var getUserData = function (x, y) {
  return x * y;
};

var data = getUserData(30, 40);
console.log(getUserData, data);

function fnGetAddress(info) {
  console.log(info);
  info();
}

fnGetAddress(
  function () {
    console.log("i am f2 function as a Argument");
  },
  20,
  30,
);
