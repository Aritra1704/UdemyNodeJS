console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// var res = notes.addNotes();
// console.log(res);

// console.log(_.isString(true));
// console.log(_.isString('Aritra'));

var filteredarray = _.uniq(['Aritra', 1, 'Aritra', 1, 2, 3, 4]);
console.log(filteredarray);

// console.log('Result: ' + notes.add(5, 4));

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt', 'Hello ' + user.username + ' !');
// fs.appendFile('greetings.txt', `Hello ${user.username}. Your age is ${notes.age}`);