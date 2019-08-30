const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');
const request = require('request');


// fetchMyIP((error, ip) => {
//     if (error) {
//         console.log("It didn't work!" , error);
//         return;
//     }
//         console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(fetchMyIP, (error, coords) => {
//     if (error) {
//         console.log("It didn't work!" , error);
//         return;
//     };
// });

// fetchISSFlyOverTimes(fetchCoordsByIP, (error, passTimes) => {
//     if (error) {
//         console.log("Something broke");
//         return;
//     }
//     console.log("Found coords! Flyover times:" + passTimes);
// });

// nextISSTimesForMyLocation((error, passTimes) => {
//     if (error) {
//       return console.log("It didn't work!", error);
//     }
//     console.log(passTimes);
//   });

const printPassTimes = function(passTimes) {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };
//Taken from Lighthouse compass

nextISSTimesForMyLocation((error, passTimes) => {
    if (error) {
      return console.log("It didn't work!", error);
    }
    printPassTimes(passTimes);
  });