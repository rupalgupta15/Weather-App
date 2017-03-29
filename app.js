
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js') // or extension can be removed
const weather = require('./weather/weather.js')

const argv = yargs.
  options({
    a : {
      demand :  true,
      alias: 'address',
      describe: 'Address tp fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  } else {
    //console.log(JSON.stringify(results,undefined,2));
    console.log(results.address);
    //lat,lng,callback
  //  weather.getWeather(39.9444071,-75.1631718, (errorMessage, weatherResults) => {
  weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
      // Important to use weatherResults to differentiate from results of geocodeAddress
      if (errorMessage){
        console.log(errorMessage);
      } else {
        //console.log(JSON.stringify(weatherResults,undefined,2));
        console.log(`It's currently ${weatherResults.actualTemp} but it feels like ${weatherResults.feelsLike}`);
      }
    });
  }
});



//console.log(argv.a);
/*
> encodeURIComponent('1301 lombard street, philadelphia')
'1301%20lombard%20street%2C%20philadelphia'
> decodeURIComponent('1301%20lombard%20street%2C%20philadelphia')
'1301 lombard street, philadelphia'
> decodeURIComponent('Rupal%20Gupta')
'Rupal Gupta'
*/

//Dark Sky API Secret Key : eafe8c6cc7afb151d8b51de45ab84d57


/*
   if(error){
     //callback('Unable to connect to google server');
     console.log('Unable to connect to google server'); //Usually this error will occur if url is incorrect
   } else if (body.status === 'ZERO_RESULTS') {
     callback('Unable to find that address, Please try something else')
     //console.log('Unable to find that address, Please try something else');
   } else if (body.status === 'OK')
   { callback(undefined, {
     address: body.results[0].formatted_address,
     latitude: body.results[0].geometry.location.lat,
     longitude: body.results[0].geometry.location.lng });*/
