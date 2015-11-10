(function()
{
	angular
		.module("WhiteBoardApp")
		.factory("CourseService", courseService);

	function courseService($http)
	{
		var service = 
		{
			// createCourse: createCourse,
			 readAllCourses: readAllCourses,
			 readOneCourseById: readOneCourseById,
			// deleteOneCourseById: deleteOneCourseById,
			// updateCourseById: updateCourseById
		};

		return service;

		function readAllCourses(callBack)
		{
			$http
			.get('/rest/course')
			.success(callBack);
		}

		function readOneCourseById(id, callBack)
		{
			$http
			.get('/rest/course/:' + id)
			.success(callBack);
		}

	}
})();