const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1>');
    res.send({
        name: 'Aritra',
        likes: [
            'Reading',
            'Coin collection'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About page!');
});

app.get('/bad', (req, res) => {
    res.send({
        err: 'Unable to fullfill this request'
    });
});

app.listen(3000);