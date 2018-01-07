const request = require('request');

request({
    url: 'http://maps.google.com/maps/api/geocode/json?address=plot%2083%20mega%20hills%20madhapur',
    json: true
}, (error, response, body) => {
   console.log(body); 
});