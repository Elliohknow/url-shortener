const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// so app can be deployed on heroku
var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());
app.use(cors());
// allows node to find static content
app.use(express.static(__dirname + '/public'));
// create the database entry
app.get('/new/:urlToShorten(*)', (req, res, next) => {
  // ES5 -> var urlToShorten = req.params.urlToShorten;
  var {urlToShorten} = req.params;
  return res.json({urlToShorten});
});



app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

module.exports = {app};