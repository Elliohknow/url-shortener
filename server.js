const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// so app can be deployed on heroku
var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());
app.use(cors());

// create the database entry
app.get('/new/:url-to-shorten', (req, res, next) => {
  
});


app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

module.exports = {app};