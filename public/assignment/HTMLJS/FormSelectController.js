(function(){
    angular
         .module("FormBuilderApp")
         .controller("FormSelectController", FormSelectController);

    function FormSelectController($scope, $routeParams) {
     alert($routeParams.count);
   
    
    }

})();