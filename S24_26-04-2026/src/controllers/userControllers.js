const {
  connectServer,
  connectDatabase,
  connectCollection,
  insertData,
  accessData,
} = require("../model/userModel");

const User = require("../schema/auth.js");

function getAllUsersData(req, res) {
  //connect with database
  const db = connectDatabase("gfg11DB");

  //connect with collection
  const collection = connectCollection(db, "users");

  //access data from database
  accessData(collection)
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch(() => {
      res.send({ ok: false, error: "failed to access the data" });
    });
}

function createAccount(req, res) {
  //access the data from request
  const data = req.body;

  //validate the data
  if (data) {
    //connect with database
    const db = connectDatabase("gfg11DB");

    //connect with collection
    const collection = connectCollection(db, "users");

    //perform insert operation
    insertData(collection, data)
      .then(() => {
        res.send({ ok: true, result: "Account Created Successfully" });
      })
      .catch(() => {
        res.send({ ok: false, error: "Failed to create account" });
      });
  } else {
    res.send({ ok: false, error: "Request Data is missing" });
  }
}

function login(req, res) {}

module.exports = { getAllUsersData, createAccount, login };
