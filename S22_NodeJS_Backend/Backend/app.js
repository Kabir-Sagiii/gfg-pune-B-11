const express = require("express");

const app = express();

app.get("/getdata", (req, res) => {
  res.send("Get Request ");
}); // get request  // http://localhost:4646/getdata

app.get("/postdata", (req, res) => {
  res.send("Get Request with postdata");
});

app.post("/postdata", (req, res) => {
  res.send("Post Request");
}); //Post :  // http://localhost:4646/postdata

app.put("/putdata", (req, res) => {
  res.send("Put Request");
}); // put :  // http://localhost:4646/putdata

app.delete("/deletedata", (req, res) => {
  res.send("Delete Request");
}); // delete :  // http://localhost:4646/deletedata

app.listen(4646, () => {
  console.log("Express Server Started");
});

// http://localhost:4646
