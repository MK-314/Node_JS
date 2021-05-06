var request = require('request');
var log = console.log;

var url = 'http://api.weatherstack.com/current?access_key=8600d40be5dd78dfbd6cabd45b967ab2&query=37.8267,-122.4233&units=f';
var GeolocationCoords = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWljaGFlbGthc2hrb3YiLCJhIjoiY2tvYzBnYjB0MDM2dTJwcGQ1OXI3Z2plaiJ9.eefLWmTaqE5wpjYwNg0h8w&limit=1';

request({ url: url, json: true }, (error, response) => {
    // var dataObject = JSON.parse(response);
    // log(response.body.current);
    // log(dataObject.type)
    log(response.body.current.weather_descriptions[0] + ", It is currently " + response.body.current.temperature + " It feels like " + response.body.current.feelslike)
});

request({ url: GeolocationCoords, json: true }, (error, response) => {
    var latitude = response.body.features[0].center[1];
    var longitude = response.body.features[0].center[0];
    log(latitude + " and " + longitude)
})