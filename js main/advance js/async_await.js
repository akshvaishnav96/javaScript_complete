// async await is the modern method to handle promises

// let url = "https://jsonplaceholder.typicode.com/users";

// async function promisedemo() {
//   let data = await fetch(url);
//   let res = await data.json();
//   return res;
// }

// async function getdata(){
//     let data = await promisedemo();

//     console.log(data);
// }
// getdata()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// we are going to create a table throught that data from the api and show it on web page by clicking a button

// let url = "https://jsonplaceholder.typicode.com/users";

// async function promisedemo() {
//   let data = await fetch(url);
//   console.log('witing');
//   let res = await data.json();
//   return res;
// }

// promisedemo()


// async function getdata() {
//   let userdata = await promisedemo();

//   document.getElementById("show").addEventListener("click", (e) => {
//       maindv = document.getElementById("hjas");
//       let div = document.createElement("div");
//       div.setAttribute('id','tablediv');
//       div.innerHTML = `<table class="table" id='table'>
//               <thead>
//               <tr>
//               <th scope="col">id</th>
//                   <th scope="col">name</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">address</th>
//                 </tr>
//               </thead>
//               <tbody id="tbody">
//               </tbody>
//             </table>`;
//       maindv.appendChild(div);
//     userdata.map((data)=>{
//         let tbody = document.getElementById("tbody");
//         tbody.innerHTML += `<th scope="row">${data.id}</th>
//              <td>${data.name}</td>
//              <td>${data.email}</td>
//              <td>${data.address.city}, ${data.address.street}, ${data.address.zipcode}</td>`;
//     })
   
// });
// let hide = document.getElementById('hide').addEventListener('click',()=>{
//     document.getElementById('tablediv').remove()
// })
// }

// getdata();

