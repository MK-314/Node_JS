var fs = require('fs');
const { parse } = require('path');
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
        console.log("New note added");
        saveNotes(notes);
    } else {
        console.log("We have the Note with the same Title");
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
    }
}

var saveNotes = function(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

var loadNotes = function() {
    try {
        var dataBuffer = fs.readFileSync('notes.json');
        var dataJSON = dataBuffer.toString();
        var dataObject = JSON.parse(dataJSON);
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