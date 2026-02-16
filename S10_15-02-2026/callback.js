function f1(para) {
  para();
}

f1(function () {
  console.log("Anonymous function used as a callback function");
});

f1(function f1() {
  console.log("Named function used as a callback function");
});

function f2() {
  console.log("f2 function used as a callback function");
}

f1(f2);
