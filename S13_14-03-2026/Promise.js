var promiseObject = new Promise(function (resolve, reject) {
  //   resolve({ name: "raj", city: "hyderabad" });
  //or
  reject({ ok: false, error: "Something went wrong" });
});

console.log(promiseObject); //pending
