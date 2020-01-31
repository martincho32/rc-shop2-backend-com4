const express = require('express');
const Product = require('./products');
const app = express();

app.use(express.json());


//Get
app.get('/api/products', function (req, res) {
  res.send("OK!");
});

//Post
app.post('/api/products', async function (req, res) {
  try {
    const item = await Product.create(req.body);
    res.send(item);
  }
  catch (e) {
    res.status(500).send(e);
  }
});



app.listen(8080, function () {
  console.log("Server listening...");
});
