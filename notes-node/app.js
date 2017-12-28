console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');


// var res = notes.addNotes();
// console.log(res);

// console.log(_.isString(true));
// console.log(_.isString('Aritra'));

// var filteredarray = _.uniq(['Aritra', 1, 'Aritra', 1, 2, 3, 4]);
// console.log(filteredarray);

// console.log('Result: ' + notes.add(5, 4));

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt', 'Hello ' + user.username + ' !');
// fs.appendFile('greetings.txt', `Hello ${user.username}. Your age is ${notes.age}`);

var argv = yargs.argv;
// var command = process.argv[2];
var command = argv._[0];
// console.log('Command', command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note)
        console.log(note);
    else
        console.log(`Note is undefined.`);

    // if(typeof note !== 'undefined' && note !== null)
    //     console.log(note);
    // else
    //     console.log(`Note is undefined.`);
} else if(command == 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('command not recognised');
}