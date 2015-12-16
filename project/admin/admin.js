angular.module("AdminApp",[]);
angular.module("AdminApp").controller("FindAllContainer", findAllContainer);
	
	function findAllContainer($scope, $http)
	{
		$http
			.get("/findAll")
			.success(function(response)
			{
				$scope.AllUsers = response;
			});	
			
	$scope.deleteUser = function(username)
	{
		$http
			.delete("/removeUser/" + username)
			.success(function(response)
			{
				$scope.AllUsers = response;
			});
	}
	}