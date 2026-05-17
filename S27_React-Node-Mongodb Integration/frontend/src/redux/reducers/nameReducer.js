const nameReducer = (storeData = "Dummy Data", action) => {
  var newData = storeData;
  if (action.type === "name") {
    newData = action.payload;
  }
  //Here we write logic to update the store

  return newData;
};

export default nameReducer;
