const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{   //db will be a client instead (v3)
if(err){
    return console.log('unable to connect to mongodb server');
}
console.log('connected to mongoDB server');

//deleteMany

//db.collection('Todos').deleteMany({text:'Eat lunch'}).then((results) =>{
//    console.log(results);
//})

//deleteOne

//db.collection('Todos').deleteOne({text:'Eat lunch'}).then((results) =>{
//    console.log(results);
//})

//findOneAndDelete

//db.collection('Todos').findOneAndDelete({completed: false}).then((results) =>{
//    console.log(results);
//});

db.collection('Users').findOneAndDelete({
   _id: new ObjectID('5b66d9e7e7df3e284c29a4f6')
}).then((results) =>{
    console.log(results)
});

db.collection('Users').deleteMany({name: 'Tor'}).then((results) =>{
    console.log(results);
});


//db.close(); //client.close(); (v3)
});