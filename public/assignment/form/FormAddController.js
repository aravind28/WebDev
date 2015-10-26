(function(){
    angular
         .module("FormBuilderApp")
         .controller("FormAddController", FormAddController);

    function FormAddController($scope, $routeParams) {
     alert($routeParams.count);
   
    
    }

})();