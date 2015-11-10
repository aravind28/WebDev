var express = require('express');
var app = express();

// app.get('/', function(req, res){
// 	res.send('hello world');
// });

// app.get('/getSomeJson', function(req, res)
// {
// 	res.send({message : "Some trial"});
// });

// app.get('/getAnother', function(req, res)
// {
// 	var courses = 
// 	[
// 	{course: "WebDev", seats: 52, date:new Date()},
// 	{course: "Java", seats: 28, date: new Date(2015, 3, 6)},
// 	{course: "C#", seats: 20, date: new Date (2016, 1, 1)}
// 	];
// 	res.send(courses);
// });

app.listen(3000);

app.use(express.static(__dirname + '/public2'));

// Making courses Global
var courses = 
[
{course: "WebDev", seats: 52, date:new Date()},
{course: "Java", seats: 28, date: new Date(2015, 3, 6)},
{course: "C#", seats: 20, date: new Date (2016, 1, 1)}
];

app.get("/rest/course/:id", function(req,res)
{
	var index = req.params.id
	res.send(courses[index]);
});

app.get("/rest/course", function(req, res)
{
	// var courses = 
	// [
	// {course: "WebDev", seats: 52, date:new Date()},
	// {course: "Java", seats: 28, date: new Date(2015, 3, 6)},
	// {course: "C#", seats: 20, date: new Date (2016, 1, 1)}
	// ];

	res.send(courses);
});