const request = require('request');

var getWeather = (lat, lng, callback) => {
  request ({
    url : `https://api.darksky.net/forecast/eafe8c6cc7afb151d8b51de45ab84d57/${lat},${lng}`,
    json :  true
  }, (error,response,body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined, {
      actualTemp : body.currently.temperature,
      feelsLike : body.currently.apparentTemperature
    });
    } else {
      callback('Unable to fetch the weather');
    }
  });
};

module.exports.getWeather = getWeather;
