const jwt = require("jsonwebtoken");
const secret_key = "vkdfjbvjdkfbvjkdfbvkdjfbvkdjfbdjkdfjvb123bck";
function verifyToken(req, res, next) {
  let token;

  if (!req.headers["authorization"]) {
    res.send({ ok: false, message: "Token is missing" });
  } else {
    token = req.headers["authorization"].slice(7);

    jwt.verify(token, secret_key, (error, data) => {
      if (error) {
        res.send({ ok: false, message: "Invalid Token " });
      } else {
        next();
      }
    });
  }
}

module.exports = verifyToken;
