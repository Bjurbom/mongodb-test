var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://localhost:27017/TodoApp');
//  ||
// 'mongodb://torbj:supermario1@ds111422.mlab.com:11422/node-database-test'

module.exports = {
    mongoose
}