const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'TODO app v1.0'
    });
    //send('Hello world!');
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Aritra',
            age: 28
        }, {
            name: 'Aditya',
            age: 26
        }
    ])
});

app.listen(3000);

module.exports.app = app;