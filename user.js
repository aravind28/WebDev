mongoose = require('./mongoose_starter')

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