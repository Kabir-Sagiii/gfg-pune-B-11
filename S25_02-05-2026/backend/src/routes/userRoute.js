//create all endpoints related to user
const { Router } = require("express");
const {
  getAllUsersData,
  createAccount,
  login,
} = require("../controllers/userControllers");
const route = Router();

route.get("/get-all-users", getAllUsersData);
// http://localhost:4747/api/users/get-all-users

route.post("/sign-up", createAccount);
// http://localhost:4747/api/users/sign-up

route.post("/sign-in", login);
// http://localhost:4747/api/users/sign-in

module.exports = route;
