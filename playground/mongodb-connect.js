//module v2 will not work if updated to v3 check udemy for more refrence

//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{   //db will be a client instead (v3)
if(err){
    return console.log('unable to connect to mongodb server');
}
console.log('connected to mongoDB server');


//var user = {name: 'andrew', age:25};
//var {name} = user;
//console.log(name);


//const db = client.db('Todoapp'); (v3)

//db.collection('Todos').insertOne({
//    text: 'something to do',
//    completed: false
//
//}, (err, results) =>{
//    if (err){
//        return console.log('unable to insert todo', err);
//    }


//    console.log(JSON.stringify(results.ops, undefined, 2));
//});

//db.collection('Users').insertOne({

//    name:'Tor',
//    age: 18,
//    location:'karlstad'

//}, (err,results)=>{
//    if (err){
//        return console.log('unable to inster todo');
//    }

//    console.log(JSON.stringify(results.ops, undefined , 2));
//    console.log(results.ops[0]._id.getTimestamp());
//});


db.close(); //client.close(); (v3)
});