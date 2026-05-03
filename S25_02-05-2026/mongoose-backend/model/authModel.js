const Customer = require("../schema/customerSchema.js");

function insertData(newuser) {
  return Customer.create(newuser);
}

function checkUser() {}

module.exports = { insertData, checkUser };
