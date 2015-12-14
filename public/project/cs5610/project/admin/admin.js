angular.module("AdminApp",[]);
angular.module("AdminApp").controller("FindAllContainer", findAllContainer);
	
	function findAllContainer($scope, $http)
	{
		//$scope.AllUsers = "AAAAAABBBBB";
		$http
			.get("/findAll")
			.success(function(response)
			{
				$scope.AllUsers = response;
			});	
	}