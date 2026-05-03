const { Router } = require("express");

const {
  signinController,
  signupController,
} = require("../controllers/authController.js");
const route = Router();

route.post("/sign-up", signupController);
// http://localhost:5001/api/auth/sign-up

route.post("/sign-in", signinController);

module.exports = route;
