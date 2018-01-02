console.log('Starting notes.js');

const fs = require('fs');

module.exports.addNotes = () => {
    console.log('Addnote');
    return 'New note';
};

var fetchNotes = () => {
    var notes = [];
    try {
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch(ex) {   
        console.log(ex.title);
    } finally {
        return notes;
    }
};


var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));    
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    // var dupNotes = notes.filter((note) => {
    //     console.log(`Title: ${title}, Note title: ${note.title}`);
    //     return note.title === title;
    // });

    var dupNotes = notes.filter((note) => note.title === title);

    if(dupNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    var notes = fetchNotes();
    var remNotes = notes.filter((note) => note.title === title);
    return remNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();

    var remNotes = notes.filter((note) => note.title !== title);
    
    saveNotes(remNotes);

    return notes.length !== remNotes.length;
};

var logNote = (note) => {
    console.log('------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    // getAll: getAll
    getAll,
    getNote,
    removeNote,
    logNote
};
// module.exports.add = (a, b) => {
//     console.log('Add');
//     return (a + b);
// };