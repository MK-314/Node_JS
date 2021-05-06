var weather_util = require('./utils/weather_util');
var log = console.log;




weather_util.geocode('Vancouver', (error, data) => {
    if (error) {
        return log(error)
    }
    weather_util.forecast(data.longitude, data.latitude, (error, forecastData) => {
        if (error) {
            return log(error)
        }
        log(data.location)
        log(forecastData)
    })
})