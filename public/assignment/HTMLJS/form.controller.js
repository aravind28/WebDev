(function(){
    angular
         .module("FormBuilderApp")
         .controller("form.controller", FormController);

    function FormController($scope, FormService) {
    
    $scope.forms = FormService.getAllForms();
    $scope.deleteForm = function(index){
        console.log(index);
        $scope.forms.splice(index, 1);
    }
    }


})

();