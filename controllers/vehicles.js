const vehicles = require("../data/vehicles")


const list = (req, res) => {
  console.log("Controller")
  res.json(vehicles)
}

const show = (req, res) => {
  const id = req.params.id
  res.json(vehicles[id - 1])
}

const create = (req, res) => {
  vehicles.push(req.query)
  vehicles[vehicles.length-1] = {"_id":vehicles.length, ...vehicles[vehicles.length-1]}
  return res.json(vehicles[vehicles.length-1])
}


module.exports = { list, show, create }