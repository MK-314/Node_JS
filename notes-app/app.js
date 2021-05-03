var validator = require('validator');
var yargs = require('yargs');
var chalk = require('chalk');

// console.log(process.argv);

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title + "\n" + 'Body: ' + argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a node',
    handler: function() {
        console.log('removing a note');
    }
});
// add, remove, read, list
// console.log(yargs.argv);
yargs.parse();