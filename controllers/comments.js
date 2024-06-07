const comments = require("../data/comments")


const list = (req, res) => {
  console.log("Controller")
  res.json(comments)
}

const show = (req, res) => {
  const id = req.params.id
  res.json(comments[id - 1])
}

const create = (req, res) => {
  comments.push(req.query)
  comments[comments.length-1] = {"_id":comments.length, ...comments[comments.length-1]}
  return res.json(comments[comments.length-1])
}


module.exports = { list, show, create }