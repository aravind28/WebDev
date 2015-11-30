var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var mongo_url = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';
console.log(mongo_url);
mongoose.connect(mongo_url);
var db = mongoose.connection;


require("./public/assignment/server/app.js")(app, mongoose, db);

app.listen(port, ipaddress);
