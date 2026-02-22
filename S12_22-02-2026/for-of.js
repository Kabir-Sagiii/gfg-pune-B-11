//It is used to iterate through array only
//It provides access to every element of the array

var info = [{ name: "s1" }, { name: "s2" }, { name: "s3" }, 10, true, "hello"];

for (var element of info) {
  console.log(typeof element);
}
