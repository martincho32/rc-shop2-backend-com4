const express = require('express');
const router = express.Router();
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 
const Subscriptors = require("../model/subscriptors");

router.use(cors()); //so the browser doesn't restrict data, without it Sendgrid will not send
sgMail.setApiKey('');//api key

router.get('/api/subscriptors', async function (req, res) {
  try{
    const subscriptors = await Subscriptors.find();
    res.send(subscriptors);
  }
  catch (e) {
    res.status(500).send(e);
  }
});

router.post('/api/subscriptors', async function (req, res) {
  try {
    const email = await Subscriptors.create(req.body);
    res.send(email);
  }
  catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
//SG.emiwWnUnTpa7MmpRaIdyJg.lNvU0mSTa113-RPxGVDJwBpEWCjhFzsHwQv6MkrWiGIO78

// app.get('/send-email', (req,res) => {
    
//   //Get Variables from query string in the search bar
//   const { recipient } = req.query; 

//   //Sendgrid Data Requirements
//   const msg = {
//       to: recipient, 
//       from: "giomanconi@hotmail.com", //should come from backend
//       subject: "Rolling Shop", //should come from backend
//       text: "Gracias por suscribirte" //should come from backend
//   }

//   //Send Email
//   sgMail.send(msg)
//   .then((msg) => console.log(recipient));
// });
