(function () {
	angular
		.module("FormBuilderApp")
		.controller("ProfileController", profileController)

	function profileController($rootScope, UserService) {

		var model = this;
		model.loggedInUser = $rootScope.loggedInUser;

		model.update = update;

		function update() {
			var updatedUser = model.loggedInUser;
			var id = updatedUser._id;

			UserService.updateUser(id, updatedUser)
				.then(function (response) {
					console.log(response);
				});
		}

	}
})();