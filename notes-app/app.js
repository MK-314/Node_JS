var fs = require('fs');
// var data = fs.writeFileSync('test.txt', 'I\'m very smart!');
var data = fs.appendFileSync('test.txt', '\nI\'m very smart too!');