const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('66.207.199.230', (error,coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coords:', coords);
// });

// fetchISSFlyOverTimes({ latitude: '43.63830', longitude: '-79.43010' }, (error, flyoverTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', flyoverTimes);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (let eachPass of passTimes) {
    let datetime = new Date(0);
    datetime.setUTCSeconds(eachPass.risetime);
    console.log(`Next pass at ${datetime} for ${eachPass.duration} seconds!`)
  }
});