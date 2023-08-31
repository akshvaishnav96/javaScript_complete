// CommonJS (Node.js) Syntax: 


// function function1() {
//     // ...
//   }
  
//   function function2() {
//     // ...
//   }
  
//   module.exports = {
//     function1,
//     function2
//   };



// anotherFile.js
// const module1 = require('./module1');

// module1.function1();
// module1.function2();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let checkvalueofobj = require('./checkobj'); // we can require module like this

let obj = {
    name: "email",
    email: "JAVA@gmail.com",
    isLoggedIn: 'email',
    javascript: 1234321,
    und: null,
    aka:'email',
    email:'javascript',

  };

  
  console.log(checkvalueofobj(obj,'email')); // javascript is not exist in this object becouse prakesh replace it

  
  //if the result show that define aas value and result show same key two or more time it means you override the value 

  // you have to give some argument in that function first the object and second which value you want to find
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import {checkvalueofobj} from './checkobj.js' ;  // you can import module in es6 like this using import

