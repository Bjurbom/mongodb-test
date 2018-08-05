const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modules/todo');
const {User} = require('./../server/modules/user');

var id = '5b6711f4fd226d2449c27a2c';

User.findById(id).then((user) =>{
    if (user == null){
        return console.log("user does not exist");
    }

    console.log('user:', user)
}).catch((e) =>{console.log(e)})

/*
var id = '5b6710a6219189b4547d1d1b11';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}*/
/*
//looking for something and reutnr EVERYTHING
Todo.find({
    _id: id
}).then((todos) =>{
    console.log('todos', todos);
})

//use this if you are looking for a speficit document
Todo.findOne({
    _id: id
}).then((todo) =>{
    console.log('todo', todo);
});*/
//by id
/*Todo.findById(id).then((todo) =>{
    //if there is no entry with this id
    if (todo == null){
        return console.log('id not found');
    }

    console.log('todo by id', todo);

    //if the id is invalid
}).catch((e)=>{console.log(e)});*/

//5b6710a6219189b4547d1d1b