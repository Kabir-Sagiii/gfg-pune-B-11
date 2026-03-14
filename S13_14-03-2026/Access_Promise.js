function createPromise() {
  var promiseObject = new Promise(function (resolve, reject) {
    resolve(10000);

    reject("GFG");
  });

  return promiseObject;
}

var promise = createPromise();

//Accessing the data from Promise
//handling the promise
//comsuming the promise
promise
  .then(function (success) {
    console.log("then is called");
    console.log(success);
  })
  .catch(function (error) {
    console.log("catch is called");
    console.log(error);
  });

// console.log(obj);

//{ok:true,result:"----"} 1

//{{ok:true,result:"-----"}} 2
