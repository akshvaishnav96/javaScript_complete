// // Regular function
// function add(a, b) {
//     return a + b;
//   }
  
//   // Equivalent arrow function
//   const add = (a, b) => a + b;

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Regular function
// function double(x) {
//     return x * 2;
//   }
  
//   // Equivalent arrow function
//   const double = x => x * 2;



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// No Arguments Object:
// Arrow functions do not have their own arguments object like regular functions. If you need to access function arguments, you would need to use the arguments object from an enclosing regular function.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// No Constructor:
// Arrow functions cannot be used as constructors. They cannot be invoked with the new keyword to create instances.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Use Cases:
// Arrow functions are commonly used for short, simple functions like array methods, callback functions, and inline event handlers.


//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Note: Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding code. This can be very useful in certain scenarios, especially when dealing with callbacks and event handlers.



// let a;
// function Counter() {
//     this.count = 0;
//    a =  setInterval(() => {
//       this.count++; // `this` refers to the Counter instance
//       console.log(this.count);
//     }, 1000);
//   }

//   Counter()
// setTimeout(()=>{
//     clearInterval(a);
// },20000)  // we using clear intervel otherwise its gonna to print number every second;


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Lexical Scope:
// Arrow functions capture the lexical scope of their surrounding code, meaning they access variables from the containing function.



// function outer() {
//     const value = 42;
//     return () => console.log(value);
//   }
//   const innerFunction = outer();
//   innerFunction(); 
  