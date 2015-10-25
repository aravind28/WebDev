(function(){
    angular
         .module("FormBuilderApp")
         .controller("FormUpdateController", FormUpdateController);

    function FormUpdateController($scope, $routeParams) {
     alert($routeParams.count);
   
    
    }

})();