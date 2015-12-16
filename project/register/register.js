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
				$scope.reset();
				console.log(JSON.stringify(response));
			});
	}
	$scope.reset = function()
	{
		$scope.username = ''
		$scope.firstname =''
		$scope.lastname = ''
		$scope.password = ''
		$scope.verifyPassword = ''
		$scope.email = ''
	};
	
}