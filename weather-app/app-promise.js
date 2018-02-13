const yargs = require('yargs');
const axios = require('axios');
const apikey = require('./geocode/api_key.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
const api_key = apikey.API_KEY;
var geocodeURL = `http://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&api_key=${api_key}`

// console.log(geocodeURL);
axios.get(geocodeURL).then((resp) => {
    if(resp.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    var latitude = resp.data.results[0].geometry.location.lat;
    var longitude = resp.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/62a0bdddff6d2306187480b1af18b9c7/${latitude},${longitude}`;
    console.log(resp.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then((weatherResp) => {
    var temp = weatherResp.data.currently.temperature;
    var apparentTemp = weatherResp.data.currently.apparentTemperature;

    console.log(`It's currently ${temp}. It feels like ${apparentTemp}.`);
}).catch((error) => {
    if(error.response.status === 404)
        console.log('Unable to connect to API Servers');
    else
        console.log(error.message);
    // console.log(error.response.status);
});
