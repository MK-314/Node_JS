var weather_util = require('./utils/weather_util');
var log = console.log;

weather_util.geocode('Philadelphia', (error, data) => {
    log(error);
    log(data);

})
weather_util.forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})