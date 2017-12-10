console.log('Starting notes.js');

module.exports.addNotes = () => {
    console.log('Addnote');
    return 'New note';
};

module.exports.add = (a, b) => {
    console.log('Add');
    return (a + b);
};