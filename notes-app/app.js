var validator = require('validator');
var yargs = require('yargs');
var chalk = require('chalk');

// console.log(process.argv);

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note');
    }
});
// add, remove, read, list
console.log(yargs.argv);