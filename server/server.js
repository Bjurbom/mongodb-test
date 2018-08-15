const _ =require('lodash');
const express= require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./modules/todo');
var {User} = require('./modules/user');
var {authenticate} = require('./middleware/authenticate.js');


var app = express();
const port = process.env.PORT || 3000;
 

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




app.patch('/todos/:id', (req,res)=>{
    var {id} = req.params;
    var body = _.pick(req.body, ['text' ,'completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){

        body.completedAt = new Date().getTime();

    } else {
        body.completed = false;
        body.completedAt= null;
    }


    Todo.findByIdAndUpdate(id,{$set: body}, {new:true}).then((todo) =>{

        if(todo == null){
            return res.status(404).send();
        } else{
             res.send({todo});
        }

    }).catch((e) =>{
        res.status(404).send();
    })
});

app.post('/users', (req,res)=>{
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    /*
    User.FindByToken
    user.generateAuthToken
    */
    user.save().then(() =>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth', token).send(user);
    }).catch((e) =>{
        res.status(400).send(e);
    })
});





app.get('/users/me', authenticate, (req,res) =>{
    res.send(req.user);
})

//start the server
app.listen(port, () =>{
    console.log(`started up on port ${port}`);
});

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