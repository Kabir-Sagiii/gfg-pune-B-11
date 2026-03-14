var array = [10, 20, 30, 40, 50];

// Destructuring
var [a, b, c, x, y] = array;

//Assignment
// How to destructure if array elements are in nested format
var arr = [10, true, [1, 2, 3, 4, 5]];

var [a, b, c] = arr;

function f1() {
  console.log(x); //40

  console.log(y); //50
}

f1();
