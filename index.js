const express = require('express');
const Products = require('./products');
const app = express();
app.use(express.json());


//Get
app.get('/api/products', function (req, res) {
  res.send("OK!");
});

//Post
app.post('/api/products', async function (req, res) {
  const doc = await Products.create(req.body);
  res.send(doc);
});


app.listen(8080, function () {
  console.log("Server listening...");
});
