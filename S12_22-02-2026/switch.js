var x = 5;

switch (x + 5) {
  case 10:
    console.log("first case  executed");
    break;

  case "sagar":
    console.log("second case  executed");
    break;

  case 100:
    console.log("third case executed");
    break;

  default: {
    console.log("default is executed");
  }
}

var paymentMode = "upi";

switch (paymentMode) {
  case "credit":
    //--------
    console.log("payment is done using credit card");
    break;

  case "debit":
    console.log("payment is done using debit card");
    break;

  case "upi":
    console.log("payment is done using upi card");
    break;

  default: {
    console.log("default is executed");
  }
}
