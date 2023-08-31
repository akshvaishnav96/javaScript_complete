// // we are going to get the element by id and manipulate that elemet

let elem = document.getElementById("myelemid");

// // we can change the element innerHTML or text;

// elem.innerHTML = `<h1>hello from innerHTML</h1>`

// elem.innerText = 'hello from inner text';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // we can add and remove class of element;

// elem.classList.add('blackcolor');

// elem.classList.add('blackcolor','white color');  //you can add many class like this

// elem.classList.remove('myelemclass')

// elem.classList.remove('myelemclass','container') //you can remove many class that way

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // you can add and remove id in element

// elem.id = 'newid';

// elem.removeAttribute('id');

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // you can add attributes in Element

// elem.setAttribute('id','23')  // you can also set id like this

// elem.setAttribute('class','secclass');   // this method override the all class and add given call in attr

// elem.setAttribute('class','class1 class2 class3');   // if you want to add many class you can do like this

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // you can get attributes

// console.log(elem.getAttributeNames()) // you can check which attributes are in that element

// console.log(elem.getAttribute('class')) // you can get the all class names

// console.log(elem.getAttribute('id')) // you can get the all class names

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // you can set attributes

// console.log(elem.removeAttribute('class')) // you can remove the element attribute like this

// console.log(elem.removeAttribute('id')) // you can get the all class names

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // you can add style

// elem.style.backgroundColor = 'red';

// elem.style.textAlign = 'center'

// //  if you want to remove any style

// elem.removeAttribute('style'); // this is goind to remove all the style from that element

// elem.style.backgroundColor = null;  // this gonna remove that element style you can override that style to null
