angular.module("RegisterApp",[]);
angular.module("RegisterApp").controller("RegisterController", registerController);

function registerController($scope, $http)
{
	$scope.submitFunc = function()
	{
		var userObj = {
			username : $scope.username,
			firstname : $scope.firstname,
			lastname : $scope.lastname,
			password : $scope.password,
			email : $scope.email
		};
		console.log('called');
	    console.log('efgh'+JSON.stringify(userObj));
		$http
			.post("/RegisterUser", userObj)
			.success(function (response)
			{
				console.log(JSON.stringify(response));
			});
	}
	
	
}