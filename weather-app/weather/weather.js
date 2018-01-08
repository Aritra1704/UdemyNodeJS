const request = require('request');
// const apikey = require('./geocode/api_key.js');

var getWeather = (latitude, longitude, callback) => {
    // const ds_api_key = apikey.DS_API_KEY;
    request({
        url: `https://api.darksky.net/forecast/62a0bdddff6d2306187480b1af18b9c7/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
            
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                curTemp: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
            // console.log(`Current Temp: ${body.currently.temperature}`);
        } else 
            callback('Unable to fetch weather');
            // console.log('Unable to fetch weather');
        // else if(response.statusCode === 404)
        //     console.log('Unable to fetch weather');
        // else  if(response.statusCode === 200) {
        //     console.log(`Current Temp: ${body.currently.temperature}`);
        // }
    });
};

module.exports.getWeather = getWeather;