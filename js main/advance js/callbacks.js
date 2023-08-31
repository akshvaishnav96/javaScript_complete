// // exp 1:
// function demo(callback){
//     setTimeout(()=>{
//         console.log('function set time out called')
//         callback();
//     },2000)
// }

// function demo2(){
//     setTimeout(()=>{
//         console.log('callback called')
//     },2000)
// }

// demo(demo2); // we send function as an agrument and execuite it

// exp 2:

// function demo2() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(23);
//     }, 2000);
//   });
// }

// function callbackfunc(data){
//     console.log(`callback done Responce data is : ${data}` )
// }

// demo2().then(callbackfunc);



// // exp:3 

// function demo(name, callback) {
//     console.log(name);
//     callback(); 
//   }
  
//   demo("javascript", () => {
//     console.log("Callback executed");
//   });