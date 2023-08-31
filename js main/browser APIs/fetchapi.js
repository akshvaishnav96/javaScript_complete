// fetch  which is used for making network requests:
// fetch return a promise and we have method wo handle that promise and get the response 

let url = "https://api.github.com/users/demo";

// // function with .then and catch method

// function getdata(userurl) {
//   fetch(userurl)
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(`Error : ${err}`);
//     });
// }

// getdata(url);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // using .then and .catch method 


// fetch(url)
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(`Error : ${err}`);
//     });

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // sending method and headers through api


// fetch('https://api.github.com/users/demo', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',

//   },
//   body: JSON.stringify(data), 
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });


//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // use async await to handle promise

// async function fetchData() {
//     try {
//       const response = await fetch('https://api.github.com/users/demo');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   }

//   fetchData()


