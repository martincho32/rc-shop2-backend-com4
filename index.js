const express = require('express');
const Product = require('./products');
const app = express();
const port = 8080;

app.use(express.json());

app.use('/img', express.static(__dirname + '/img'));


//Get
app.get('/api/products', function (req, res) {
  res.send("OK!");
});

//GetById
app.get('/api/products/:itemId', async function (req, res) {
  try {
    const id = req.params.itemId
    const itemById = await Product.findById(id);
    res.send(itemById);
  }
  catch (e) {
    res.status(500).send(e);
  }
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


app.listen(port, function() {
    console.log(`Server listening on port ${port}...`);
  });
