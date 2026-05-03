const { insertData, checkUser } = require("../model/authModel");
const jwt = require("jsonwebtoken");
const secret_key = "vkdfjbvjdkfbvjkdfbvkdjfbvkdjfbdjkdfjvb123bck";
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
  const data = req.body;

  //call the signinModel
  checkUser(data.email)
    .then((user) => {
      if (data.password === user.password) {
        let token;
        jwt.sign({ email: user.email }, secret_key, (error, token) => {
          if (error) {
            res.send({
              ok: false,
              message: "failed to create token",
              statusCode: 403,
            });
          } else {
            res.status(200).send({
              ok: true,
              message: "valid user",
              data: user,
              token: token,
            });
          }
        });
      } else {
        res.status(401).send({
          ok: false,
          statusCode: 401,
          message: "password is incorrect",
        });
      }
    })
    .catch(() => {
      res.send({ ok: false, statusCode: 401, message: "user does not exist" });
    });
}

module.exports = { signinController, signupController };
