// // Default Parameters

// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
//   }
  
//   greet();          // Output: "Hello, Guest!"
//   greet("Admin");   // Output: "Hello, Admin!"
  

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Default values can be expressions, including function calls:


// function calculateTotal(price, taxRate = 0.1, discount = 0) {
//     return price * (1 + taxRate) - discount;
//   }


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Rest Parameters

// function sum(...numbers) {

//     return numbers.reduce((total, num) => total + num, 0);

//   }
  
//   console.log(sum(1, 2, 3));        // Output: 6
//   console.log(sum(5, 10, 15, 20)); // Output: 50

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
// Note : Rest parameters must always be the last parameter in the function parameter list. You cannot have multiple rest parameters in a single function.


// function processArgs(arg1, ...restArgs) {
//     // arg1 is the first argument
//     // restArgs is an array containing the rest of the arguments
//   }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Combining Default and Rest Parameters:

// function demo(separator = " , ", ...items) {
   
//     console.log(items.join(separator));
//   }
  
//   demo(" | ", "apple", "banana", "orange"); // Output: "apple | banana | orange"
//   demo(undefined,"apple", "banana", "orange"); // Output: "apple,banana,orange"
//   demo(1,2,3); // Output: "213"
  
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++