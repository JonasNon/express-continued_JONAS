const contacts = require("../data/contacts")


const list = (req, res) => {
  console.log("Controller")
  res.json(contacts)
}

const show = (req, res) => {
  const id = req.params.id
  res.json(contacts[id - 1])
}

const create = (req, res) => {
  contacts.push(req.query)
  contacts[contacts.length-1] = {"_id":contacts.length, ...contacts[contacts.length-1]}
  return res.json(contacts[contacts.length-1])
}


module.exports = { list, show, create }