const MongoClient = require('mongodb').MongoClient;

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

    db.collection('Users').insertOne({
        name: 'Aritra',
        age: 28,
        location: 'Hyderabad' 
    }, (er, result) => {
        if(err)
            return console.log('Unable to insert user', err);

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});