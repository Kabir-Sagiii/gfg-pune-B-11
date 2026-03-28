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

  if (true) {
    let pin = 123;
    const password = 890;
    var productName = "iphone";
  }

  console.log(productName);
}

console.log(x, y);

f1();
f2();
