var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://torbj:supermario1@ds111422.mlab.com:11422/node-database-test' );
//  ||
// 
// 'mongodb://localhost:27017/TodoApp'

module.exports = {
    mongoose
}