var path = require('path');
var express = require('express');
log = console.log;

var app = express();

// Define path for Express conf:
var publicDirPath = path.join(__dirname, '../public');
var viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location:
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directoty to serve:
app.use(express.static(publicDirPath));



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Mike'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        name: "Mike"
    });
})

app.listen(3000, () => {
    log('Server is up on port 3000');
})