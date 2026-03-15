function fetch() {
  return new Promise(function (resolve, reject) {
    reject({
      ok: true,
      result: [{ name: "s1" }, { name: "S2" }, { name: "s3" }],
    });
  });
}

var promise = fetch();
// console.log(promise);

promise
  .then(function (success) {
    console.log("then");
    console.log(success);
  })
  .catch(function (error) {
    console.log("catch");
    console.log(error);
  });
