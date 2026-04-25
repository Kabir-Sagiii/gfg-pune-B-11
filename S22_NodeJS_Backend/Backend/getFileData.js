const http = require("http");
const fs = require("fs");

const httpserver = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/login") {
    fs.readFile("Login.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to read the content");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/home") {
    fs.readFile("Home.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to read the content");
      } else {
        res.end(data);
      }
    });
  } else {
    res.end("Error, not found page");
  }
});

httpserver.listen(4545, () => {
  console.log("Server Started");
});

//   http://localhost:4545
