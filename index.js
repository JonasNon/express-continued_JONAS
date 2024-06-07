const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contacts = require('./data/contacts')
const contactsRoute = require('./routes/contacts.js')
const vehicles = require('./data/vehicles')
const vehiclesRoute = require('./routes/vehicles.js')
const comments = require('./data/comments')
const commentsRoute = require('./routes/comments.js')
const products = require('./data/products')
const productsRoute = require('./routes/products.js')




app.use(bodyParser.json());
app.use(express.static('public'))

app.use(contactsRoute)
app.use(vehiclesRoute)
app.use(commentsRoute)
app.use(productsRoute)




// app.use(comments)


// app.get("/contacts", (req, res) => {
//   return res.json(contacts)
// })
// app.get("/contacts/:id", (req, res) => {
//   const id = req.params.id
//   return res.json(contacts[id-1])
// })
// app.post("/contacts", (req, res) => {  
//   contacts.push(req.query)
//   contacts[contacts.length-1] = {"_id":contacts.length-1, ...contacts[contacts.length-1]}
//   return res.json(contacts[contacts.length-1])
// })


// app.get("/vehicles", (req, res) => {
//   return res.json(vehicles)
// })
// app.get("/vehicles/:id", (req, res) => {
//   const id = req.params.id
//   return res.json(vehicles[id-1])
// })
// app.post("/vehicles", (req, res) => {  
//   vehicles.push(req.query)
//   vehicles[vehicles.length-1] = {"_id":vehicles.length-1, ...vehicles[vehicles.length-1]}
//   return res.json(vehicles[vehicles.length-1])
// })

// // app.get("/comments", (req, res) => {
// //   return res.json(comments)
// // })
// app.get("/comments/:id", (req, res) => {
//   const id = req.params.id
//   return res.json(comments[id-1])
// })
// app.post("/comments", (req, res) => {  
//   comments.push(req.query)
//   comments[comments.length-1] = {"_id":comments.length-1, ...comments[comments.length-1]}
//   return res.json(comments[comments.length-1])
// })


// app.get("/products", (req, res) => {
//   return res.json(products)
// })
// app.get("/products/:id", (req, res) => {
//   const id = req.params.id
//   return res.json(products[id-1])
// })
// app.post("/products", (req, res) => {  
//   products.push(req.query)
//   products[products.length-1] = {"_id":products.length-1, ...products[products.length-1]}
//   return res.json(products[products.length-1])
// })








const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
