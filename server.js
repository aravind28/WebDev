// Express
var express = require('express');
var app = express();

// MongoDB Connection
var mongoose = require('./mongoose_starter')
var User = require('./user');

// YouTube Connection
var YouTube = require('youtube-node');
var youTube = new YouTube();

// Twitter Connection
var twitterList = require('./twitterserver');

// Body Parser and Multer
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var newYorkTimes = require("nyt");
// Request
var request = require('request');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



// Command to Host Directory
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/project'));



// Sample Hello World
app.get('/', function (req, res) {
  res.send('hello world');
});

// New York Times 
var keys =
  {
    'popular': '3d6d31dffa01de4676bc42b8b48ca0cc:4:73752253',
    'article-search': '3d6d31dffa01de4676bc42b8b48ca0cc:4:73752253'
  }
var nyt = newYorkTimes(keys);  
// NYT //
app.get("/nytime", function (req, res) {
  res.json("aba");
});
// NYT //

// Youtube API //
youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');
// Youtube API //

// Twitter API //
app.get('/twitter', function(req, res)
{
  res.send(twitterList);
});

// Twitter API //

// Mongoose API //
app.get("/findAll", function (req, res) {
   
  User.find(function (err, result) {
    res.json(result);
  });

});

app.post("/RegisterUser", function (req, res) {
  var createUser = req.body;

  User.create(createUser, function (err, response) {
    res.send(response);
  });

});

app.delete("/removeUser/:username", function(req, res)
{
  User.remove({username : req.params.username}, function(err, response)
  {
    User.find(function(err, data)
    {
      res.json(data);  
    });
  });
});
// New York Times API //
app.get("/nyt", function (req, res) {
  var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=sample-key";
  
  request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      res.json(body);
    }
})
  });

  console.log("HelloWorld!!");

  app.listen(3000);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var db = mongoose.connection;

require("./public/assignment/server/app.js")(app, mongoose, db);

app.listen(port, ipaddress);
