const request = require('request');
var geocodeAddress = (address, callback) => {

var encodedAdd = encodeURIComponent(address);
//console.log(encodeAdd);

 request ({
   url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}`,
   json :  true
 }, (error,response,body) => {
   //console.log(body); //Gives weird output, a little different from browser
   /*
   { results:
   [ { address_components: [Object],
       formatted_address: '25 Senate Pl, Jersey City, NJ 07306, USA',
       geometry: [Object],
       place_id: 'ChIJn5slYyVXwokRVHwS-OuXg1Q',
       types: [Object] } ],
  status: 'OK' } */
  //console.log(JSON.stringify(body,undefined,2));
  //console.log(JSON.stringify(response,undefined,2));
  if(error){
    callback('Unable to connect to google server');
    //console.log('Unable to connect to google server'); //Usually this error will occur if url is incorrect
  } else if (body.status === 'ZERO_RESULTS') {
    callback('Unable to find that address, Please try something else')
    //console.log('Unable to find that address, Please try something else');
  } else if (body.status === 'OK')
  { callback(undefined, {
    address: body.results[0].formatted_address,
    latitude: body.results[0].geometry.location.lat,
    longitude: body.results[0].geometry.location.lng
  });
  /*  console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`); */
  }
 });
};

/*
module.exports = {
  geocodeAddress
}
Easier way to write this is:
 */

module.exports.geocodeAddress = geocodeAddress;
