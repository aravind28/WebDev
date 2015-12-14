angular
  .module("TwitterApp",['ngSanitize'])
  .controller("TweetController", tweetController);
  
 function tweetController($scope, $http)
 { 
    $http
      .get("/twitter")
      .success(function(response)
      {
        $scope.tweets = response;
      }); 
 }


// var TwitterApp = require('twitter');
// var Util = require('util');

// var	twit = new TwitterApp({
// 	consumer_key: 'jSmjEE2i9tVh8UnM9Ofk16e6n',
// 	consumer_secret: 'Fxr2iTw10D5vGSVMFvSnCysowrtIjCQmQ7wGLPwwjjjM5s92Aa',
// 	access_token_key: '295003833-bLsGjftvAjEpWSoqGUDRRY2MzLpnslAPFwEmJDxL',
// 	access_token_secret: 'UirKWrbNynhklkzbfgRp8IsBAlcRKoLENd7OcLFxma4dU'
// }); 

// // twit.get('search/tweets', {q: 'node.js'}, showTweets);

// // function showTweets(error, tweets, response) {
// // 	console.log(tweets);
// // }

// //  var count = 0;

// // twit.stream('filter', {track: 'technology'}, function(stream)
// // {
// // 	stream.on('data', function(data)
// // 	{
// // 		console.log(Util.inspect(data));
// // 		stream.destroy();
// // 		//process.exit(0);		
// // 	});
// // });

// twit.stream('statuses/filter', {track: 'technology'}, function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet);
//   });
 
//   stream.on('error', function(error) {
//     throw error;
//   });
// });