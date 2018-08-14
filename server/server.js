var express= require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./modules/todo');
var {user} = require('./modules/user');


var app = express();
const port = 3000;
// process.env.PORT

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


// GET /todos/123145
app.get('/todos/:id', (req, res) =>{
    var {id} = req.params;

    if(!ObjectID.isValid(id)){
        return res.status(404).send(id);
    }

    Todo.findById(id).then((todo) =>{
        if(todo == null){
            return res.status(404).send();
        }
        res.send(todo);
    }, () =>{
        res.status(404).send();
    })

});

app.delete('/todos/:id', (req,res) =>{
    var {id} = req.params;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) =>{
        if(todo == null){
            return res.status(404).send();
        } else{
             res.send(todo);
        }
    }).catch((err) => {
        res.status(404).send();
    });
});

//start the server
app.listen(port, () =>{
    console.log(`started up on port ${port}`);
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