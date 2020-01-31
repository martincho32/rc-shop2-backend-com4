const express = require('express');
const app = express();

app.use(express.json());


//Get
app.get('api/', function(req, res) {

});

//Post
app.post('api/', function(req, res) {
    
});


app.listen(8080, function() {
    console.log("Server listening on port 8080...");
  });