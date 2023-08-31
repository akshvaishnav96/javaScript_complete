

// let options = {
//     enableHighAccuracy: true, // Use GPS if available
//     timeout: 5000, // Maximum time to wait for location (in milliseconds)
//     maximumAge: 0 // Maximum age of a cached position (in milliseconds)
// };

// function getposition(value){
//     console.log(`latitude is : ${value.coords.latitude} and longitude is : ${value.coords.longitude}`)
// }

// function geterror(error){
//     console.log(error)
// }

// navigator.geolocation.getCurrentPosition(getposition,geterror,options)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// you can change the method to 'watchPosition' to continue watch update position 

// let options = {
//     enableHighAccuracy: true, // Use GPS if available
//     timeout: 5000, // Maximum time to wait for location (in milliseconds)
//     maximumAge: 0 // Maximum age of a cached position (in milliseconds)
// };

// function getposition(value){
//     console.log(`latitude is : ${value.coords.latitude} and longitude is : ${value.coords.longitude}`)
// }

// function geterror(error){
//     console.log(error)
// }

// let watchdata = navigator.geolocation.watchPosition(getposition,geterror,options)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// you can stop watching updte location data using navigator.geolocation.clearWatch(watchId);

// navigator.geolocation.clearWatch(watchdata);