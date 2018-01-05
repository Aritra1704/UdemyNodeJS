// console.log('Starting app.js');

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

// var argv = yargs.argv;

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new Note.', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all nodes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', "Remove a note", {
        title: titleOptions
    })
    .help()
    .argv;
// var command = process.argv[2];
var command = argv._[0];
// console.log('Command', command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note Created');
        notes.logNote(note);
    } else
        console.log(`Note is undefined.`);

    // if(typeof note !== 'undefined' && note !== null)
    //     console.log(note);
    // else
    //     console.log(`Note is undefined.`);
} else if(command == 'list') {
    var allNotes = notes.getAll();
    if(allNotes) {
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach(note => {
            notes.logNote(note);
        });
    } else
        console.log(`List is empty.`);
    
} else if(command === 'read') {
    var readNote = notes.getNote(argv.title);
    
    if(readNote) {
        console.log('Note found');
        notes.logNote(readNote);
    } else
        console.log('Note not found');
} else if(command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('command not recognised');
}