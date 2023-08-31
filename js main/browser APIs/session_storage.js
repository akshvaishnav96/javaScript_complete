// session storage methods are similler to local storage

// Important :  Data stored in sessionStorage lasts only for the duration of the current browser session. It is cleared when the user closes the browser or tab.

// 1 Storing Data,

//sessionStorage.setItem('key', 'value');

sessionStorage.setItem('sessionitem1','javaScript');

sessionStorage.setItem('sessionitem2',JSON.stringify([1,2,3,4,5]));

sessionStorage.setItem('sessionitem3',JSON.stringify({name:'javaScript',backend:'nodeJs'}));

console.log(sessionStorage)

// note:  sessionStorage only supports strings. You'll need to use JSON.stringify() to store objects and JSON.parse() to retrieve them.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. Retrieving Data

const value = sessionStorage.getItem('sessionitem1');
const value2 = sessionStorage.getItem('sessionitem2');
const value3 = sessionStorage.getItem('sessionitem3');

console.log(value);
console.log(JSON.parse(value2));  //you can convert back to object using JSON.parse();
console.log(JSON.parse(value3)); 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. Removing Data

sessionStorage.removeItem('sessionitem1');  // you can remove the sessionStorage item using this method


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 4. Clearing All Data

// sessionStorage.clear(); // you can use this method for remove all the sessionStorage items

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++













