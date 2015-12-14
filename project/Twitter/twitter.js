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
