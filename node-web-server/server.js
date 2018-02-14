const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1>');
    // res.send({
    //     name: 'Aritra',
    //     likes: [
    //         'Reading',
    //         'Coin collection'
    //     ]
    // });
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'Welcome to my website'
    });
    //
});

app.get('/about', (req, res) => {
    // res.send('About page!');
    res.render('about.hbs', {
        pageTitle: 'About page',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        err: 'Unable to fullfill this request'
    });
});

// app.listen(3000);
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});