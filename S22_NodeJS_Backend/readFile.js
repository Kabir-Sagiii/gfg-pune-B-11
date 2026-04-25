const fs = require("fs");

fs.readFile("demo.html", "utf-8", (error, data) => {
  if (error) {
    console.log("Failed to Acceess the content from file");
  } else {
    console.log(data);
  }
});
