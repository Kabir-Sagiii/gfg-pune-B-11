var xvar = 10;

let xlet = 20;

const xconst = 30;

function outer() {
  var oVar = 1;
  let olet = 2;
  const oconst = 3;

  console.log(xvar, oVar);

  function inner(){
  var x;
  let y;

  }
}

outer(); //calling ---- > FEC

// console.log(xvar, oVar);
