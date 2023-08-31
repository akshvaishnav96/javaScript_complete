// 1. global scope
// 2. Local Scope (function scope)
// 3. Block Scope (introduced with ES6):
// 4. Nested Scopes:

// 1. global scope;

// let a = "global";

// function demo(){
//     console.log(a) // Accessible here
// }
// console.log(a); //Accessible here

// let b = "global2";

// function demo2() {
//   console.log('first ' , b); // Accessible here
//   function demo3() {
//     console.log('secons ' , b); // Accessible here
//     function demo4() {
//       console.log('third ',b); // Accessible here
//     }
//     demo4();
//   }
//   demo3();
// }
// demo2();

// console.log('forth', b) // Accessible here


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// local scope


// function demo(){
//     let a2 = 'global2'
//     console.log(a2) // Accessible here
// }
// demo()

// console.log(a2); // you can't access it here becouse a2 is in a local scope of function  ;





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// block scope 

// if(true){
//     let a = 'local'
//     console.log(a); // Accessible here
// }

// console.log(e); // Can't access here

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nested Scope


// let b = "global2";


// function demo2() {

//   console.log('first variable demo2' , b); // Accessible here

// //   console.log('c variable demo2 ' , c);  // Can't access c here becouse c define in a scope of demo3 function and its demo2 child  and parent cant access child properties

//   function demo3() {

//     let c = 'local';

//     console.log('secons ' , b); // Accessible here becouse its define as a global variable
//     console.log('c variable demo3 ' , c); // Accessible here
//     function demo4() {

//       console.log('third ',b); // Accessible here global variable
//       console.log('c variable demo4 ' , c); // Accessible here becouse c is define in his parent function demo3

//     }
//     demo4();
//   }
//   demo3();
// }
// demo2();