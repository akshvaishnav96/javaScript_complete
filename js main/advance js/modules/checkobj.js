function checkvalueofobj(obj, value) {
  let objvalue = Object.entries(obj);
  objvalue = objvalue.flat(Infinity);
  let ind = [];
  let index = objvalue.map(function (el, i) {
    if (el === value) {
      ind.push(i);
    }
    return ind;
  });

  if (objvalue.includes(value) && objvalue.indexOf(value) % 2 == 0) {
    return `"${value}" is exist in object and its define as key and position :  index ${
      objvalue.indexOf(value) / 2
    }`;
  } else if (objvalue.includes(value) ) {
    if (ind.length > 1) {
      let indarr = ind.map((e) => {
        return Math.floor(e / 2);
      });

      evenarr = [];
      oddarr = ["key Available with same name on index : "];

      indarr.filter((e) => {
        if(e % 2 == 0){
            evenarr.push(e)
        }else{
         oddarr.push(e);

        }
      });
if(oddarr.length > 1){
    let a = oddarr.pop();
   evenarr.push(a);
}

evenarr.sort(compare);

function compare(a,b){
    return a+b
}

      mainarr = evenarr.concat(oddarr);

      return `"${value}" is exist in object and its define as value and define : ${
        ind.length
      } times on index ${mainarr.join(",")} `;
      
    } else {
      return `"${value}" is exist in object and its define as value and position :  index ${Math.floor(
        objvalue.indexOf(value) / 2
      )}`;
    }
  } else {
    return `"${value}" is not exist in the object`;
  }
 
}
ind=null;

module.exports = checkvalueofobj;




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// function checkvalueofobj(obj, value) {
//   let objvalue = Object.entries(obj);
//   objvalue = objvalue.flat(Infinity);
//   let ind = [];
//   let index = objvalue.map(function (el, i) {
//     if (el === value) {
//       ind.push(i);
//     }
//     return ind;
//   });

//   if (objvalue.includes(value) && objvalue.indexOf(value) % 2 == 0) {
//     return `"${value}" is exist in object and its define as key and position :  index ${
//       objvalue.indexOf(value) / 2
//     }`;
//   } else if (objvalue.includes(value)) {
//     if (ind.length > 1) {
//       let indarr = ind.map((e) => {
//         return Math.floor(e / 2);
//       });

//       evenarr = [];
//       oddarr = ["key Available with same name on index : "];

//       indarr.filter((e) => {
//         e % 2 == 0 ? evenarr.push(e) : oddarr.push(e);
//       });

//       mainarr = evenarr.concat(oddarr);

//       return `"${value}" is exist in object and its define as value and define : ${
//         ind.length
//       } times on index ${mainarr.join(",")} `;
//     } else {
//       return `"${value}" is exist in object and its define as value and position :  index ${Math.floor(
//         objvalue.indexOf(value) / 2
//       )}`;
//     }
//   } else {
//     return `"${value}" is not exist in the object`;
//   }
// }

// module.exports = checkvalueofobj;


// you can also export module after es6 like this

// export function demo(){
//   example...
// }