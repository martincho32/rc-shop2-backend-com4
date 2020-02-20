const express = require('express');
const router = express.Router();
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 
const Subscriptors = require("../model/subscriptors");

router.use(cors()); //so the browser doesn't restrict data, without it Sendgrid will not send
sgMail.setApiKey('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');//api key

router.get('/api/subscriptors', async function (req, res) {
  try {
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

router.post('/api/send-email', async function (req, res) {
  try {
    const subscriptors = await Subscriptors.find(req.body);

    if (subscriptors) {
      res.send('Ya estas subscripto a nuestras ultimas noticias')
    }
    else {
      const email = await Subscriptors.create(req.body);
      res.send("Email : " + email+ " was added to Subscriptors collection");
      
      const msg = { //Sendgrid Data Requirements
        to: req.body,
        from: "giomanconi@hotmail.com", //should come from backend
        subject: "Rolling Shop", //should come from backend
        text: "Gracias por suscribirte" //should come from backend
      }

      sgMail.send(msg)//Send Email
        .then(console.log("Email was sent"));
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
