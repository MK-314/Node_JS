var fs = require('fs');
// var book = {
//     title: 'Harry Potter',
//     author: 'J.K'
// };

// converting to JSON format / string:
// var book_str = JSON.stringify(book);

// console.log(book_str);
// console.log(JSON.parse(book_str).title);
// fs.writeFileSync('1json.json', book_str);

// var dataBuffer = fs.readFileSync('1json.json');
// console.log(dataBuffer.toString());

// step 1 read file:
var fileData = fs.readFileSync('1json.json');
// step 2 to JSON:
var fileDataStr = fileData.toString();
// step 3 to Object:
var myObject = JSON.parse(fileDataStr);

myObject.name = 'Mike';
myObject.age = 32;
// write back to file:
fs.writeFileSync('1json.json', JSON.stringify(myObject));