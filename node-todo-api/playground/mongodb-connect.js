// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {
//     name: 'Aritra',
//     age: 26
// }

// var{name} = user;
// console.log(name);

// console.loh()
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server');
    }

    console.log('Connected to Mongo server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert to do', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

//     db.collection('Users').insertOne({
//         // _id: 123,
//         name: 'Aritra',
//         age: 28,
//         location: 'Hyderabad' 
//     }, (er, result) => {
//         if(err)
//             return console.log('Unable to insert user', err);

//         // console.log(JSON.stringify(result.ops, undefined, 2));
//         console.log(result.ops[0]._id.getTimestamp());
//     });

//     client.close();
});