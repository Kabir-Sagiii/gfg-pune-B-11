//Global Scope

var x = 10;

let y = 20;

function f1() {
  console.log(x, y);
}

function f2() {
  var city = "hyderabad";
  let username = "Rajiv";
  console.log(x, y, city);
}

console.log(x, y);

f1();
f2();
