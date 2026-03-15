function fetch() {
  return new Promise(function (resolve, reject) {
    reject({
      ok: true,
      result: [{ name: "s1" }, { name: "S2" }, { name: "s3" }],
    });
  });
}

async function handlePromise() {
  try {
    var successData = await fetch();
    console.log("try");
    console.log(successData);
  } catch (error) {
    console.log("Catch");
    console.log(error);
  }
}

handlePromise();
