const products = require("../data/products")


const list = (req, res) => {
  console.log("Controller")
  res.json(products)
}

const show = (req, res) => {
  const id = req.params.id
  res.json(products[id - 1])
}

const create = (req, res) => {
  products.push(req.query)
  products[products.length-1] = {"_id":products.length, ...products[products.length-1]}
  return res.json(products[products.length-1])
}


module.exports = { list, show, create }