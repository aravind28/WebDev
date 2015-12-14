angular
	.module("YouTubeApp",[])
	.controller("YouTubeController", youtubeController);
	
function youtubeController($scope, $http)
{
	$http
		.get('/youtube')
		.success(function(response)
		{
			$scope.yt = response;
		});
}
