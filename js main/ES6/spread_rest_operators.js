// // 1: Array Copying and Concatenation:

// const originalArray = [1, 2, 3];
// const secondArray = [4,5,6];
// const copyArray = [...originalArray]; // Creates a shallow copy
// const combinedArray = [...originalArray,4,5,6]; // Concatenates arrays
// const combinedArray2= [...originalArray,...secondArray,7,8,9]; // can Concatenates two or more arrays


// console.log(copyArray);
// console.log(combinedArray);
// console.log(combinedArray2);

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // 2: Function Arguments:

// function add(a, b, c) {
//     return a + b + c;
//   }
  
//   const numbers = [1, 2, 3];
  
//   const result = add(...numbers); // Same as to add(1, 2, 3)
//   const result2 = add(4,6,...numbers); // //add 4,6,1 and other 2,3 are ignored result: 11

//   console.log(result);
// console.log(result2);

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
// // 3: Object Copying and Merging:


// const originalObject = { a: 1, b: 2 };
// const originalObject2 = { c: 3, d: 4 };
// const copyObject = { ...originalObject }; // Creates a shallow copy
// const mergedObject = { ...originalObject, c: 3, d: 4 }; // Merges objects
// const mergedObject2 = { ...originalObject,...originalObject2, e: 5, f: 6 }; // Merges objects

// console.log(copyObject);    //{ a: 1, b: 2 }
// console.log(mergedObject);  //{ a: 1, b: 2, c: 3, d: 4 }
// console.log(mergedObject2); //{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=


// // Rest Operator (...)

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }
  
// //   const result = ; // result is 15

// console.log(sum(1, 2, 3, 4, 5));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




