const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{   //db will be a client instead (v3)
if(err){
    return console.log('unable to connect to mongodb server');
}
console.log('connected to mongoDB server');

//db.collection('Todos').find({
//    _id: new ObjectID('5b66dd0c7f3385edd6c324b6')
//}).toArray().then((docs) =>{
//console.log('todos');
//console.log(JSON.stringify(docs,undefined,2));
//}, (err) =>{
//    console.log('unable to fetch todos', err);
//});

//db.collection('Todos').find().count().then((count) =>{
//console.log(`todos count: ${count}`);

//}, (err) =>{
//    console.log('unable to fetch todos', err);
//});

db.collection('Users').find({name: 'jakob'}).toArray().then((docs)=>{
    console.log("Users");
    console.log(JSON.stringify(docs,undefined,2));
}, (err) =>{
    if (err){
        console.log("unable to find" , err);
    }
})

//db.close(); //client.close(); (v3)
});