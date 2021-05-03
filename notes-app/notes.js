var chalk = require('chalk');
var fs = require('fs');
const log = console.log;
var getNotes = function() {
    return "Your notes...";
};

var addNote = function(title, body) {
    var notes = loadNotes();
    var itemDontExist = true;
    notes.forEach(element => {
        if (element.title == title) {
            itemDontExist = false;
        }
    });
    if (itemDontExist) {
        notes.push({
            title: title,
            body: body
        });
        console.log(chalk.green.inverse("New note added"));
        saveNotes(notes);
    } else {
        console.log(chalk.red.inverse("We have the Note with the same Title"));
    }

};
var removeNote = function(title) {
    var notes = loadNotes();
    var index = -1;
    notes.forEach(element => {
        if (element.title == title) {
            index = notes.indexOf(element);
        }
    });
    if (index > -1) {
        notes.splice(index, 1);
        saveNotes(notes);
        log(chalk.white.bgGreen('Note removed!'));
    } else {
        log(chalk.white.bgRed('No note found!'));
    }
    // var notesToKeep = notes.filter(function(note) {
    //     return note.title !== title;
    // });
    // saveNotes(notesToKeep);
}

var saveNotes = function(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

var loadNotes = function() {
    try {
        var dataBuffer = fs.readFileSync('notes.json'); // pure data
        var dataJSON = dataBuffer.toString(); // to JSON
        var dataObject = JSON.parse(dataJSON); // to Object
        return dataObject;
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};