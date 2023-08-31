// // 1. Object Destructuring:

// const data = {
//   frontend: "javaScript",
//   backend: "NodeJs",
//   experience:3
// };


// const {frontend,backend} = data ;

// console.log(frontend); //javaScript
// console.log(backend);  //NodeJs

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // 2. Nested Object Destructuring:

// // Destructuring can be nested to extract values from nested objects:

// const user = {
//     name: "javaScript",
//     address: {
//       street: "123 Main St",
//       city: "Democity"
//     }
//   };
  
//   const { name, address: { city,street } } = user;
//   console.log(name); // Output: "javaScript"
//   console.log(city); // Output: "Democity"
//   console.log(street); // Output: "123 Main St"
  

//   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // 3. Aliasing

// // You can rename variables during destructuring using the colon : syntax:

// const person = {
//     firstName: "ankit",
//     lastName: "goyal",
   
//   };
  

// const { firstName: fName, lastName: lName } = person;
// console.log(fName); // Output: "ankit"
// console.log(lName); // Output: "goyal"

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // 4. Array Destructuring:

// // Array destructuring allows you to extract elements from an array and assign them to variables in a specific order

// const colors = ["red", "green", "blue"];
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor);  // Output: "red"
// console.log(secondColor); // Output: "green"
// console.log(thirdColor);  // Output: "blue"

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // note : You can skip elements using commas:

// const [one, , three] = colors; // "green" is skipped

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // 5. Swapping Variables:

// // Destructuring can be used to easily swap the values of two variables

// let a = 5;
// let b = 10;
// [a, b] = [b, a]; // Swapping
// console.log(a); // Output: 10
// console.log(b); // Output: 5

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // 6. Rest Elements:

// // Destructuring can also include a "rest" element that collects remaining values

// const colors = ["red", "green", "blue"];

// const [first, ...rest] = colors; // rest will be ["green", "blue"]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // 7. Mixed Object and Array Destructuring:

// // You can combine object and array destructuring when dealing with complex data structures

// const data = {
//     name: "John",
//     scores: [85, 90, 75]
//   };
  
//   const { name, scores: [math, science, english] } = data;
  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const arr = [1,2,3];
// const [first, second, third = "default"] = arr; // third will be "default" if not present

// console.log(third); //present in array then : 3
// console.log(third); //otherwise is "default";

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

