angular.module("NytApp", []);
angular.module("NytApp").controller("NYTContainer", nytController);

function nytController($scope, $http) {
		//$scope.nyt = "try";
		$http
			.get("/nyt")
			.then(function (res) {
				$scope.nyt = res.data.response.docs;
			});
			