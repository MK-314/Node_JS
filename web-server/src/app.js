var path = require('path');
var express = require('express');
log = console.log;

var app = express();
var publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));



app.get('/weather', (req, res) => {
    res.send({
        forecast: "Sunny",
        location: "Toronto"
    });
})

app.listen(3000, () => {
    log('Server is up on port 3000');
})