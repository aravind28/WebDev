(function(){
    angular
         .module("FormBuilderApp")
         .config(Configure)


   function Configure($routeProvider){
   	$routeProvider
   		.when("/home",{
   			templateUrl: "home/home.view.html"
   		})
   		.when("/login",{
   			templateUrl: "login.view.html",
            controller: "login.controller"
   		})
         .when("/register",{
            templateUrl: "register.view.html",
            controller: "RegisterController"
         })
   		.when("/profile",{
   			templateUrl: "profile.view.html",
            controller: "ProfileController"
   		})
   		.when("/forms",{
   			templateUrl: "form.view.html",
            controller: "form.controller"
   		})
         .when("/formUpdate/:count", {
            templateUrl: "formUpdate.html",
            controller: "FormUpdateController"
         })
         
         
         
   		
   		.otherwise(
   		{redirectto:"home.view.html"
   		});
      }
   })();