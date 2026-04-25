// Controller's

function getAllUsersData(req, res) {
  //handle the request
  res.send("Get Response From Controller");
}

//handle the request
function createAccount(req, res) {
  //access the data from request
  const data = req.body;

  //Validate the request data : 3rd party packages, if else, regex()
  if (data) {
    // add the data in the database

    res.send("Post Request is Processing ");
  } else {
    res.send({ ok: false, error: "Request Data is missing" });
  }
}

function login(req, res) {
  //handle the request
}

module.exports = { getAllUsersData, createAccount, login };
