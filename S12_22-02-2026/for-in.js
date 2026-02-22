//It is used to iterate through object only
//It provides access to every property key of the object

var user = {
  name: "Krishna",
  gender: "male",
  id: 101,
};

for (var key in user) {
  console.log(user[key]);
}
