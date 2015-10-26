(function(){
    angular
    .module("FormBuilderApp")
    .factory("UserService", UserService);

    function UserService(){
        var users = [
    {name: "Registration", name2:"Hi"},
    {name: "Contact", name2:"Hello"},
    
    
    ];

        var service = {
            getAllUsers: getAllUsers
        };
        return service;

        function getAllUsers(){
            return users;
        }
    }
})()