const express = require('express');
const Product = require('./model/products');
const email = require('./routes/email');
const app = express();
const port = 8080;
const authRoute = require('./routes/auth');
const posRoute = require('./routes/posts');
const dotenv = require('dotenv');

dotenv.config();


app.use(express.json());
app.use('/img', express.static(__dirname + '/img'));
app.use('/email', email);
app.use('/api/user', authRoute);
app.use('/api/posts', posRoute);






//Search by brand (this can be changed to search by other property, we could add a "keywords" property to the schema)
app.get('/api/products/search', async function(req,res) {
  try {
    if(req.query.brand){
      const regex = new RegExp(req.query.brand, 'gi');
      const products = await Product.find({brand: regex})
      res.send(products);
    }
    else{
      const regex = new RegExp(req.query.category, 'gi');
      const products = await Product.find({category: regex})
      res.send(products);
    }
    
  }
  catch (e) {
    res.status(500).send(e);
  }
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

//Get
app.get('/api/products', async function (req, res) {
  try{
    const products = await Product.find();
    res.send(products);
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
