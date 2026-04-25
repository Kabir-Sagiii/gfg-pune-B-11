const fs = require("fs");

fs.writeFile("document.txt", "I am Content", (error) => {
  if (error) {
    console.log("Failed to create file");
    console.log(error);
  } else {
    console.log("File Created Successfully");
  }
});
