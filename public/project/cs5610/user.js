var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');
var UserSchema = new mongoose.Schema(
     {
       username: String,
       firstname: String,
       lastname: String,
       password: String,
       email: String},
       {collection: "cs5610.user"});
       
   var User = mongoose.model("User", UserSchema);

module.exports =   User