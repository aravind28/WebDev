(function()
{
	angular
		.module("WhiteBoardApp")
		.factory("CourseService", CourseService);
		
	function CourseService($http)
	{
		var service = 
		{
			findAllCourses : findAllCourses,
			findCourse : findCourseById,
			deleteCourse : deleteCourseById,
			addCourse : addCourse,
			updateCourse : updateCourse	
		};
		return service;
		
		function findAllCourses(callback)
		{
			$http
				.get('/rest/course')
				.success(callback);
		}
		
		function findCourseById(id, callback)
		{
			$http	
				.get('/rest/course/' + id)
				.success(callback);
		}
		
		function deleteCourseById(id, callback)
		{
			$http
				.delete('/rest/course/' + id)
				.success(callback);
		}
		
		function addCourse(course, callback)
		{
			$http
				.post('/rest/course', course)
				.success(callback);
		} 
		
		function updateCourse(id, course, callback)
		{
			$http
				.put('/rest/course/' + id, course)
				.success(callback)
		}
	}
})();