const request = require('request');
const apikey = require('./api_key.js');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    const api_key = apikey.API_KEY;
    
    request({
        // url: 'http://maps.google.com/maps/api/geocode/json?address=plot%2083%20mega%20hills%20madhapur',
        url: `http://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&api_key=${api_key}`,
        json: true
    }, (error, response, body) => {
    //    console.log(JSON.stringify(body, undefined, 2)); 
        if(error) {
            callback('Unable to connect to Google Servers');
        } else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else if(body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
            // console.log(`Address: ${body.results[0].formatted_address}`);
    
            // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        } else {
            callback('Internet issue.');
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;
// module.exports = {
//     geocodeAddress
// };