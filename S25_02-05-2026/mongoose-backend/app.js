const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongdb.js");
const AuthRoute = require("./routes/authRoute.js");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", AuthRoute);

app.listen(5001, () => {
  console.log("Server Started on Port No 5001");
  connectDB();
});
