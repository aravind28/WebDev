(function(){
	angular
		.module("WhiteBoardApp", [])
		.controller("CourseController", courseController);

	// function courseController($scope)
	// {
	// 	var courses = 
	// 	[
	// 	{course: "WebDev", seats: 52, date:new Date()},
	// 	{course: "Java", seats: 28, date: new Date(2015, 3, 6)},
	// 	{course: "C#", seats: 20, date: new Date (2016, 1, 1)}
	// 	];
	// 	$scope.hello = "hello from course controller"
	// 	$scope.courses = courses
	// }

	function courseController($scope, $http, CourseService)
	{
		CourseService.readAllCourses(renderCourses);

		function renderCourses(response)
		{
			$scope.courses = response;
		}

		// $http
		// 	.get('/rest/course')
		// 	.success(function(response)
		// 	{
		// 		$scope.courses = response;
		// 	});
		
		$scope.selectCourse = selectCourse();

		function selectCourse(index)
		{
			CourseService.readOneCourseById(index, function(response)
			{
				$scope.course = response;
			});
		}
		// CourseService.readOneCourseById(1, function(response)
		// {
		// 	$scope.testCourse = response;
		// });

	}
})();