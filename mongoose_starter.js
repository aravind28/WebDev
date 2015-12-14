var mongoose = require('mongoose');

var mongo_url = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';
console.log(mongo_url);
mongoose.connect(mongo_url);

module.exports = mongoose