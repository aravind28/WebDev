(function(){
    angular
    .module("FormBuilderApp")
    .factory("FormService", FormService);

    function FormService(){
        var forms = [
    {name: "Registration", user:"Hi"},
    {name: "Contact", user:"Hello"},
    
    
    ];

        var service = {
            getAllForms: getAllForms
        };
        return service;

        function getAllForms(){
            return forms;
        }
    }
})()