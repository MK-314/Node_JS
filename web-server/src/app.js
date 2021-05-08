var path = require('path');
var express = require('express');
var hbs = require('hbs');
log = console.log;

var app = express();

// Define path for Express conf:
var publicDirPath = path.join(__dirname, '../public');
var viewsPath = path.join(__dirname, '../templates/views');
var partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location:
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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