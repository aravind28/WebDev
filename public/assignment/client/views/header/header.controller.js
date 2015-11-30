(function () {

	angular
		.module("FormBuilderApp")
		.controller("HeaderController", headerController);

	function headerController($scope, $location) {
		$scope.$location = $location;
	}

})();