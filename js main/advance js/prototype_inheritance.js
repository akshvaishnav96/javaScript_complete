// // prototypel inheritance

// function Demo(name,isLoggedIn){
// this.name = name;
// this.isLoggedIn = isLoggedIn;
//  }

//  Demo.prototype.fulldetail = function(){
//     return `The name is ${this.name} and logged in ${this.isLoggedIn}`
//  }

//  let user1 = new Demo('prakesh',true);
//  let user2 = new Demo('ganesh',false);

//  console.log(user1.fulldetail());
//  console.log(user2.name);
//  console.log(user2.fulldetail());

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class base Inheritance

// class Demo{
//     constructor(name,isLoggedIn){
//         this.name = name;
//         this.isLoggedIn = isLoggedIn;
//     }

//     fulldetail(){
//         return `The name is ${this.name} and logged in ${this.isLoggedIn}`
//     }
// }

//  let user1 = new Demo('prakesh',true);
//  let user2 = new Demo('ganesh',false);

//  console.log(user1.fulldetail());
//  console.log(user2.name);
//  console.log(user2.fulldetail());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// javascript is all about objects and every object already have predefined prototypes

// exp : 1
// let str = 'javaScript';
// console.log(str.__proto__); //if you run this on browser to got all the methode define for string as prototype
// console.log(String.prototype)

// exp:2
// let obj = {
//     name:'javascript'
// }
// console.log(obj.__proto__); //if you run this on browser to got all the methode define for string as prototype
// console.log(Object.prototype)

// exp:3
// let arr = [1,2,3,4,5]
// console.log(arr.__proto__); //if you run this on browser to got all the methode define for string as prototype
// console.log(Array.prototype)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// you can also set prototypes

// const proto = {
//   name: "ankit",
//   detail: function () {
//     console.log(`the name is ${this.name}`);
//   },
// };

// let b = {
// //   name: "prabhas", // if you are not define the name here it check for name in his parent 'proto' form name and show ankit

//   detail2: function () {
//     console.log(`name ${this.name} called `);
//   },
// };

// b.__proto__ = proto;

// proto.detail("ankit");
// b.detail2();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// class Demo{
//     constructor(name,isLoggedIn){
//         this.name = name;
//         this.isLoggedIn = isLoggedIn;
//     }

//     fulldetail(){
//         return `The name is ${this.name} and logged in ${this.isLoggedIn}`
//     }
// }


// class Demo2 extends Demo{


//     detail2(){
//         return `detail2 call from demo2 with name ${this.name} and logged in ${this.isLoggedIn}`
//     }

// }

//  let user1 = new Demo('prakesh',true);
//  let user2 = new Demo2('ganesh',false);

//  console.log(user1.fulldetail());
//  console.log(user2.name);
//  console.log(user2.fulldetail()); // you can also access demo method in demo2 becouse we extend the call with it