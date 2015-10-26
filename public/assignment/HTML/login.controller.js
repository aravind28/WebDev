(function(){
    angular
         .module("FormBuilderApp")
         .controller("login.controller", LoginController);

    function LoginController($scope, UserService) {
    
    $scope.users = UserService.getAllUsers();
    $scope.deleteUser = function(index){
        console.log(index);
        $scope.users.splice(index, 1);
    }
    }


})

();