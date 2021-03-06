const{ObjectId} = require('mongodb');

var express = require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyparser.json());

// app.post('/todos', (req, res) => {
//     var todo = new Todo({ 
//         text: req.body.text
//     });

//     todo.save().then((doc) => {
//         res.send(doc);
//     }, (e) => {
//         res.status(400).send(e);
//     })
// });

// app.post('/todos', (req, res) => {
//     var todo = new Todo({ 
//         text: req.body.text,
//         completed: req.body.completed
//     });

//     todo.save().then((doc) => {
//         res.send(doc);
//     }, (e) => {
//         res.status(400).send(e);
//     })
// });

// app.get('/todos', (req, res) => {
//     Todo.find().then((todos) => {
//         res.send({todos});
//     }, (e) => {
//         res.status(400).send(e);
//     });
// });

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};

// var testUser = new User({
//     // email: 'aritra@test.com'
// });

// testUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save user', e);
// });

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectId.isValid(id)) {
        console.log('Id not valid');
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            console.log('404');
            return res.status(404).send();
        }
        console.log('Printing todo');
        console.log(todo);
        res.send({todo});
    }).catch((e) => {
        return res.status(400).send();
    })
    
    // Todo.findById(id).then((todo) => {
    //     if(!todo) {
    //         return res.status(404).send();
    //     }

    //     res.send({todo});
    // }).catch((e) => {
    //     return res.status(400).send();
    // })
//    res.send(req.params);
});