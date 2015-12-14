var express = require('express');
var app = express();
var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

app.get('/youtube', function (req, res){
	var result = youTube.search('BMW', 2, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(JSON.stringify(result, null, 2));
  }
  res.send(result);
});
});

app.listen(3000);