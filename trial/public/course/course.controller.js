(function()
{
	angular
		.module("WhiteBoardApp", [])
		.controller("CourseController", CourseController);
		
	function CourseController($scope, CourseService)
	{
		$scope.selectCourse = findCourse;
		$scope.deleteCourse = deleteCourse;
		$scope.addCourse = addCourse;
		$scope.updateCourse = updateCourse;
		//$scope.hello = "hello from course controller";
		CourseService.findAllCourses(function(response)
		{
			$scope.courses = response;
		});
		
		function findCourse(id)
		{
			CourseService.findCourse(id, function(data)
			{
				$scope.course = data[0];
			});
		}
		
		function deleteCourse(id)
		{
			CourseService.deleteCourse(id, function(results)
			{
				$scope.courses = results;
			});
		}
		
		function addCourse(course)
		{
			CourseService.addCourse(course, function(courses)
			{
				$scope.courses = courses;
			});
		}
		
		function updateCourse(id, course)
		{
			CourseService.updateCourse(id, course, function(results)
			{
				$scope.courses = results;
			});
		}
	} 
})();