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
   			templateUrl: "login/login.view.html",
            controller: "login/login.controller"
   		})
         .when("/register",{
            templateUrl: "register/register.view.html",
            controller: "register/register.controller"
         })
   		.when("/profile",{
   			templateUrl: "profile/profile.view.html",
            controller: "profile/profile.controller"
   		})
   		.when("/forms",{
   			templateUrl: "form/form.view.html",
            controller: "form/form.controller"
   		})
         .when("/formUpdate/:count", {
            templateUrl: "form/formUpdate.html",
            controller: "form/FormUpdateController"
         })
         
         
         
   		
   		.otherwise(
   		{redirectto:"home.view.html"
   		});
      }
   })();