function f1() {
  return 10;
}

function f2(inputOfF1) {
  console.log("f2 is executing");
  console.log(inputOfF1);
}

var resultOfF1 = f1();

f2(resultOfF1); //10
