const mongoose = require("mongoose");
const monogdb_url = "mongodb://localhost:27017/gfgmongooseDB";

function connectDB() {
  mongoose
    .connect(monogdb_url)
    .then(() => {
      console.log("Connected with Mongodb Server and Database");
    })
    .catch((error) => {
      console.log("Failed to Connect with Server and DB");
      console.log(error);
    });
}

module.exports = connectDB;
