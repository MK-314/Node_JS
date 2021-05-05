var validator = require('validator');
var yargs = require('yargs');
var chalk = require('chalk');
var notes = require('./notes.js');

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
    handler: argv => notes.addNote(argv.title, argv.body)
});

yargs.command({
    command: 'remove',
    describe: 'remove a node',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => notes.removeNote(argv.title)

});
yargs.command({
    command: 'read',
    describe: 'read the node',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => notes.read(argv.title)

});
// add, remove, read, list
// console.log(yargs.argv);
yargs.parse();