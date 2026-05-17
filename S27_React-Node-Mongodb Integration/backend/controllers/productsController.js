const { getProducts } = require("../model/productsModel.js");
function getAllProducts(req, res) {
  const categoryName = req.query.category;
  console.log(categoryName);

  getProducts(categoryName)
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, error: "failed to fetch the data" });
    });
}

module.exports = { getAllProducts };
