const Customer = require("../schema/customerSchema.js");

function insertData(newuser) {
  return Customer.create(newuser);
}

function checkUser(email) {
  return Customer.findOne({ email: email });
}

module.exports = { insertData, checkUser };
