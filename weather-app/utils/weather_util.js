var request = require('request');
var log = console.log;
var geocode = (address, callback) => {
    var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWljaGFlbGthc2hrb3YiLCJhIjoiY2tvYzBnYjB0MDM2dTJwcGQ1OXI3Z2plaiJ9.eefLWmTaqE5wpjYwNg0h8w&limit=1';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    });
}
var forecast = (la, lo, callback) => {
    var url = 'http://api.weatherstack.com/current?access_key=8600d40be5dd78dfbd6cabd45b967ab2&query=' + lo + ',' + la + '&units=f';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ", It is currently " + response.body.current.temperature + " It feels like " + response.body.current.feelslike)
        }
    });
}

module.exports = {
    geocode: geocode,
    forecast: forecast
}