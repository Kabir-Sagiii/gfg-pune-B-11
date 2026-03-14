function useState() {
  //variable
  var state = 10;

  //nested function
  function setState(para1) {
    console.log("setState() is called", para1);
  }

  return [state, setState];
}

// var x = useState();
// var [a, b] = x;

var [a, b] = useState();
b(1000);

// var x = useState(); //valid
// //x = [10,setState]

// console.log(x[0]);
// x[1](9999);
