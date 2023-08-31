// if statements
// 1.if
// 2.if-else
// 3.if-else if

// function agecheck(age) {
//   if (age > 18) {
//     console.log("You can drive now");
//   }
// }

// function agecheck2(age) {
//   if (age > 18) {
//     console.log("You can drive now");
//   } else {
//     console.log("You are not above 18 you cannot drive");
//   }
// }

// function agecheck3(age) {
//   if (age > 15) {
//     console.log("You are not young enough to drive");
//   } else if (age > 18) {
//     console.log("You are  above 18 you can drive");
//   } else {
//     console.log("You are  under 15 you are child now");
//   }
// }

// agecheck(20);
// agecheck2(17);
// agecheck3(12);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loops

// 1.for loops
// 2.while
// 3.do while
// 4.for in
// 5.for of


// for loop 

// for(let i=1;i<=5 ; i++){
//     console.log(i);
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// while loop

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// do while loop

// let i = 1;
// do{
//     console.log(i);
//     i++
// }while(i<=5);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for of loop (it mailny use to iterate array  but you can also use this for object to)

// let arr = [1,2,3,4,5];
// for(let i of arr){
//     console.log(i);
// }


// let obj = {
//     language : 'javaScript',
//     backend : 'nodeJs'
// }


// for(let i of obj){
//     console.log(obj);  // if you use like this its given TypeError: obj is not iterable;
// }

// for(let [key,value] of Object.entries(obj)){
//     console.log(key);
//     console.log(value); //you can iterate object like this with for of loop
// }



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let obj = {
//     language : 'javaScript',
//     backend : 'nodeJs'
// }

// for(let i in obj){
//     console.log(`let keys is ${i}`); // you can use for in on array
//     console.log(obj[i]);
// }


// let arr= [1,2,3,'ak'];

// for(let i in arr){
//     console.log(arr[i]); // you can use for in on array
// };


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++








