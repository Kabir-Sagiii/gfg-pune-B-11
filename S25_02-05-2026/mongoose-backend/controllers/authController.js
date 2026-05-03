const { insertData } = require("../model/authModel");

function signupController(req, res) {
  insertData(req.body)
    .then((data) => {
      res.send({ ok: true, message: "Account Created", data: data });
    })
    .catch((error) => {
      res.send({ ok: false, message: "Failed to create Account" });
      console.log(error);
    });
}

function signinController(req, res) {
  res.send("signin working");
}

module.exports = { signinController, signupController };
