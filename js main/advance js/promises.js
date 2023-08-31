// let prom = new Promise((res,rej)=>{

//         function getdata(){
//             console.log('print on console');
//             setTimeout(() => {
//                 res([1,2,[3,4],5])
//             }, 5000);
//         }

//         getdata();

// })

// prom.then(function(v){
//     return v;

// }).catch((e)=>{
// console.log(e);
// })

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// new Promise((res, rej) => {
//   setTimeout(() => {
//     function getdata() {
//       console.log("print on console");
//       setTimeout(() => {
//         rej('promise rejected');
//       }, 5000);
//     }
//     getdata();
//   }, 3000);
// })
//   .then(function (v) {
//     return v;
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// real example :

// let data = fetch("https://jsonplaceholder.typicode.com/users")
// // console.log(data); // in this stage promise  is panding so we can get the data from that promise with then method
//   .then(function (value) {
//     return value.json();
//   })
//   .then((v) => {
//     console.log(v); // Access the data stored in the global variable
//   }).catch((err)=>{
// console.log(console.log(`the error is ${err}`));
//   });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


