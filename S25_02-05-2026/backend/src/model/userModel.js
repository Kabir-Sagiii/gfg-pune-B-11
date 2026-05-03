const { MongoClient } = require("mongodb");
const mongoClient = new MongoClient("mongodb://localhost:27017");

function connectServer() {
  mongoClient
    .connect()
    .then(() => {
      console.log("Successfully Connected with Mongodb Server");
    })
    .catch(() => {
      console.log("Failed to connect with Mongodb Server");
    });
}

function connectDatabase(databaseName) {
  const dbRef = mongoClient.db(databaseName);
  return dbRef;
}

function connectCollection(dbRef, collectionName) {
  const collectionRef = dbRef.collection(collectionName);
  return collectionRef;
}

function insertData(collectionRef, newuser) {
  return collectionRef.insertOne(newuser);
}

function accessData(collectionRef) {
  return collectionRef.find().toArray();
}

function checkUser() {}

module.exports = {
  connectServer,
  connectDatabase,
  connectCollection,
  insertData,
  accessData,
};
