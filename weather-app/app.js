var request = require('request');
var log = console.log;

var url = 'http://api.weatherstack.com/current?access_key=8600d40be5dd78dfbd6cabd45b967ab2&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
    // var dataObject = JSON.parse(response.body);
    // log(response.body.current);
    log(response.body.current.weather_descriptions[0] + ", It is currently " + response.body.current.temperature + " It feels like " + response.body.current.feelslike)
});