const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modules/todo');
const {User} = require('./../server/modules/user');

/*
Todo.remove({}).then((result) =>{
    console.log(result);
})
*/

//Todo.findOneAndRemove
// Todo-findByIdAndRemove
Todo.findByIdAndRemove('5b73194a8fa8fb0349e0592e').then((todo) =>{
    console.log(todo);
})