/// Express
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

//-//

/// connect to mongoose database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');
//-//

/// body-parser and multer
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//-//

///creating schema for mongoose
var CourseSchema = new mongoose.Schema(
  {
    title: String,
    seats: ({type: Number, default: 25})
  },
  {collection: "course"}
); 

var Course = mongoose.model("Course", CourseSchema);
//-//

/// get all courses
app.get('/rest/course', function(req, res)
{
  // Course.find(function(err, results)
  // {
  //   res.json(results);
  // })
  findAll(function(err, results)
  {
    res.json(results); 
  })
});
//-//

/// get one course by id
app.get('/rest/course/:id', function(req, res)
{
    Course.find({_id : req.params.id}, function(err, data)
    {
      res.json(data);
    });
});
//-//

/// adding a create function to add data to the database
function createCourse(course)
{
  Course.create(course, function(err, results)
  {
    console.log(err);
    console.log(results);
  });
}
//-//

///finding all elements
function findAll(callback)
{
  Course.find(callback);
}

findAll(renderCourses); 

function renderCourses(err, results)
{
  //console.log(results);
  for (var n in results)
  {
    var title = results[n].title;
    var seats = results[n].seats;
    console.log([title, seats])
  }
}
//-//

/// finding elements by title
function findByTitle(title, callback)
{
  Course.find({title: title}, callback);
}
//-//

/// delete a course by id
app.delete('/rest/course/:id', function(req, res)
{
  Course.remove({_id: req.params.id}, function(err, data)
  {
    Course.find(function(err, results)
    {
        res.json(results);
    }); 
  });
});
//-//

/// add a course
app.post('/rest/course', function(req, res)
{
  var course = req.body;
  Course.create(course, function(err, data)
  {
    Course.find(function(err, results)
    {
      res.json(results);
    });
  });
});
//-//

///update a course
app.put('/rest/course/:id', function(req, res)
{
  var course = req.body;
  Course.findOneAndUpdate({_id: req.params.id}, {title: course.title, seats: course.sets}, function(err, data)
  {
    Course.find(function(err, results)
    {
      res.json(results);
    });
  });
});

app.listen(3000);