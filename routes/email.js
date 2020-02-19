const express = require('express');
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 

const app = express();

//api key
sgMail.setApiKey('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');

app.use(cors()); //so the browser doesn't restrict data, without it Sendgrid will not send


app.get('/send-email', (req,res) => {
    
  //Get Variables from query string in the search bar
  const { recipient } = req.query; 

  //Sendgrid Data Requirements
  const msg = {
      to: recipient, 
      from: "giomanconi@hotmail.com", //should come from backend
      subject: "Rolling Shop", //should come from backend
      text: "Gracias por suscribirte" //should come from backend
  }

  //Send Email
  sgMail.send(msg)
  .then((msg) => console.log(recipient));
});