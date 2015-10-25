(function(){
	angular
	.module("FormBuilderApp")
	.controller("header.controller", HeaderController);

	function HeaderController($scope, $location){
     $scope.$location = $location;
	}
})();