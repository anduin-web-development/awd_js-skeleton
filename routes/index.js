// (c) Anduin Web Development, 2017.
// Contact: admin@anduin.io

var express = require('express');
var router = express.Router();
var auth = require('basic-auth');

var myUser = process.env.USER;
var myPass = process.env.PW;
var mySecret = process.env.SEKRET;
var myAddress = process.env.ADDY;
var Mailgun = require('mailgun').Mailgun;

var mg = new Mailgun(mySecret);

router.get('/', function(req, res, next) {
  res.statusCode = 202;
  res.render('index', { title: 'AWD' }); // For no auth check, keep this.
});

router.post('/', function(req, res, next) {
  console.log('Post request!', req.body);

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  if (validateEmail(req.body.client_email) === true) {
    var messageData = 'News from the North! \n';
    messageData +=
      'First name: ' +
        req.body.client_first_name +
        '\nLast name:' +
        req.body.client_last_name +
        '\nContact: ' +
        req.body.client_email +
        '\nMessage: ' +
        req.body.client_email_message || 'NA';
    mg.sendText(
      'admin@anduin.io',
      ['paul@anduin.io', 'omar@anduin.io'],
      'Speak, friend, and enter!',
      messageData,
      myAddress,
      {},
      function(err) {
        if (err) console.log('Error: ' + err);
        else console.log('Success!');
      }
    );
  } else {
    res.status(500).send('Error: something went wrong.');
  }
});

module.exports = router;