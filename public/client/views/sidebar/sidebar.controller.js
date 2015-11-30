(function () {
	angular
		.module("FormBuilderApp")
		.controller("SidebarController", sidebarController);

	function sidebarController($scope, $location) {
		$scope.$location = $location;
	}
})();