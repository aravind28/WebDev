(function(){
	angular
	.module("FormBuilderApp")
	.controller("sidebar.controller", SidebarController);

	function SidebarController($scope, $location){
     $scope.$location = $location;
	}
})();