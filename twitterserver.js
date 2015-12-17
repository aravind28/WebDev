var TwitterApp = require('twitter');

var twit = new TwitterApp
  ({
    consumer_key: 'jSmjEE2i9tVh8UnM9Ofk16e6n',
    consumer_secret: 'Fxr2iTw10D5vGSVMFvSnCysowrtIjCQmQ7wGLPwwjjjM5s92Aa',
    access_token_key: '295003833-bLsGjftvAjEpWSoqGUDRRY2MzLpnslAPFwEmJDxL',
    access_token_secret: 'UirKWrbNynhklkzbfgRp8IsBAlcRKoLENd7OcLFxma4dU'
  });

var count = 0;
var tweetList = [];

twit.stream('statuses/filter', { track: 'technology' }, function (stream) {
  stream.on('data', function (tweet) {
    tweetList.push(tweet);
    
    if(tweetList.length >= 20)
    {
      tweetList=[];
    };
  });

  stream.on('error', function (error) {
    console.log("error");
    throw error;
  });
});

module.exports = tweetList;

