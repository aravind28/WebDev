(function(){
    angular
    .module("FormBuilderApp")
    .factory("FormService", FormService);

    function FormService(){
        var forms = [
    {name: "Registration"},
    {name: "Contact List"},
    {name: "To Do List"}
    
    
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