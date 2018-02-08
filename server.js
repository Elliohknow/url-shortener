// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shortUrl = require('./models/shortUrl');
// so app can be deployed on heroku
var port = process.env.PORT || 3000;
// create instance of express, instantiate dependencies
var app = express();
app.use(bodyParser.json());
app.use(cors());
// connect to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shortUrls');

// allows node to find static content
app.use(express.static(__dirname + '/public'));
// create the database entry
app.get('/new/:urlToShorten(*)', (req, res, next) => {
  var {urlToShorten} = req.params;
  // regex for url
  var regex =/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  
  if(regex.test(urlToShorten)===true){
    return res.json({urlToShorten});
  }

  return res.json({urlToShorten: 'Failed'});
});



app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

module.exports = {app};