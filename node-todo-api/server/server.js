var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save new something
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    }, 
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo');
// });

var challTodo = new Todo({
    text: 'Challenge2 Todo',
    completed: true,
    completedAt: 123
});

challTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save challenge todo');
})
