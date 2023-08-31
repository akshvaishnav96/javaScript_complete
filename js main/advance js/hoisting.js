// // how we saw we declare a variable 
// console.log(demovar); // Output: undefined
// var demovar = 20;
// console.log(demovar); // Output: 10


// // how the varibale accetually decleared

// var demovar;           // Variable declaration is hoisted to the top
// console.log(demovar); // Output: undefined
// demovar = 10;         // Assignment remains in the same place
// console.log(demovar); // Output: 10


//function hoisting

// Function declarations are also hoisted to the top of their containing scope. This means you can call a function before its declaration in the code.

// demo()   // output : 'hello from function'
// function demo(){
//     console.log('hello from function');
// }
// demo() // output : 'hello from function'