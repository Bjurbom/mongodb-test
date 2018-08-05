var express= require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./modules/todo');
var {user} = require('./modules/user');


var app = express();


app.use(bodyParser.json());

app.post('/todos',(req,res) =>{

    var todo = new Todo({
        text: req.body.text
    });


    todo.save().then((doc) =>{
        res.send(doc);
    }, (e) =>{
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) =>{
 Todo.find().then((todos) =>{
    res.send({todos});
 }, (e) =>{
    res.status(400).send(e);
 })
}); 


//start the server
app.listen(3000, () =>{
    console.log("started on port 3000")
})

module.exports = {app};
























//var newTodo = new Todo({
//    text:'Cook dinner'
//});

//newTodo.save().then((docs) =>{
//    console.log('saved todo', docs);
//}, (e)=>{
//    console.log("unable to save todo");
//});
/*
var otherTodo = new Todo({
    text:' Edit this video ',

});

var addUser = new User({
    email:"bjurbom1@gmail.com"
})

addUser.save().then((docs) =>{

    console.log(JSON.stringify(docs,undefined,2));

}, (e) =>{
    console.log("unable to add user", e)
});

otherTodo.save().then((docs) =>{
    console.log(JSON.stringify(docs,undefined,2));
}, (e)=> {
    console.log("unable to save at todo");
});*/