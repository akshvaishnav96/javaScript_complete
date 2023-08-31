// Creating a Map:

const myMap = new Map();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Setting and Getting Values:

myMap.set('name', 'Alice');
console.log(myMap.get('name')); // Output: "Alice"

console.log(myMap);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Iterating Through a Map: Maps maintain the order of insertion, so you can iterate through them using various methods like forEach, for...of, and entries.

// myMap.set('age', 30);

// myMap.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });
// // Output:
// // name: Alice
// // age: 30

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Size and Clear:


// console.log(myMap.size); // Output: 2
// myMap.clear();
// console.log(myMap.size); // Output: 0

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Creating a Set:

// let arr  = [1,2,2,3,4,1,3]

// const mySet = new Set(arr);

// console.log(mySet);  // its gonna give the distinct values

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Adding and Checking Values:

// mySet.add(1);
// mySet.add(2);
// console.log(mySet.has(1)); // Output: true
// console.log(mySet.has(3)); // Output: false


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // Iterating Through a Set:

// mySet.add(3);

// mySet.forEach(value => {
//   console.log(value);
// });
// // Output:
// // 1
// // 2
// // 3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Size and Clear:


// console.log(mySet.size); // Output: 3
// mySet.clear();
// console.log(mySet.size); // Output: 0


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++