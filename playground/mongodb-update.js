const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{   //db will be a client instead (v3)
if(err){
    return console.log('unable to connect to mongodb server');
}
console.log('connected to mongoDB server');

//updated a field
//db.collection('Todos').findOneAndUpdate({
//    _id: new ObjectID('5b66e4b07f3385edd6c3265c')
//}, {
//    $set: {
//        completed: true
//    }
//}, {
    
//    returnOriginal: false

//}
//).then((results) =>{
//    console.log(results)
//})

db.collection('Users').findOneAndUpdate({
    _id: 123
}, {
    $set: {
        name: 'Tor'
    },
    $inc: {
        age: +1
    }
}, {
    returnOrignal: false
}).then((result) =>{
    console.log(result);
})

//db.close(); //client.close(); (v3)
});