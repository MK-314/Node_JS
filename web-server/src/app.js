var path = require('path');
var express = require('express');
var hbs = require('hbs');
var weather_util = require('./utils/weather_util');
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

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You need to provide and address"
        })
    }
    weather_util.geocode(req.query.address, (error, data) => {
        if (error) {
            return res.send({
                error: "You need to provide and address"
            })
        }
        weather_util.forecast(data.longitude, data.latitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error: "You need to provide and address"
                })
            }
            return res.send({
                forecast: forecastData,
                location: data.location,
                q_address: req.query.address
            })
        })
    })
})


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





app.get('*', (req, res) => {
    res.render('404', {
        title: "Page not found",
        name: "Mike"
    })
})

app.listen(3000, () => {
    log('Server is up on port 3000');
})