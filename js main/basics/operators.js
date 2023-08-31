// 1. Arithmetic Operators

// +
// -
// *
// /
// %
// **


// let a = 10;
// let b = 4;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// result :    14
//             6
//             40
//             2.5
//             2
//             10000

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. Assignment Operators

// = Assignment
// += Addition assignment
// -= Subtraction assignment
// *= Multiplication assignment
// /= Division assignment
// %= Modulus assignment
// **= Exponentiation assignment (ES6)

// let a = 23; 
// console.log(a);

// here a = 23

// a += 1;     
// it looks like a = a+1
        // a = 23+1 = 24
        // here a = 24

// console.log(a);

// a-=3;

// it looks like a = a-3
        // a = 24-1 = 21
        // here a = 21

// console.log(a);

// a *= 2;
// it looks like a = a*2
        // a = 21*2 = 42
        // here a = 42
// console.log(a);

// a /= 2;
// it looks like a = a/2
        // a = 42/2 = 21
        // here a = 21
// console.log(a);

// a%=2;
// it looks like a = a%2
        // a = 21%2 = 1    //it return the reminder 1 like  2*10 = 20 remaning  1 as result shown
        // here a = 1
// console.log(a);

// a**2;
// it looks like a = a**2
// a = 1**2 = 1   // the expression 1**1 would be evaluated to the result of raising the number 1 to the power of 1
// here a = 1

// console.log(a);


// all result shown as 
// result :    23
//             24
//             21
//             42
//             21
//             1
//             1

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. Comparison Operators

// == Equal to
// === Strict equal to (value and type)
// != Not equal to
// !== Strict not equal to
// > Greater than
// < Less than
// >= Greater than or equal to
// <= Less than or equal to


// the given the result in Boolean (true or false)

// let a = 2;
// let b = '2';

// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// result: true
//         false
//         false
//         true
//         false
//         false
//         true
//         true


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. Logical Operators

// && Logical AND
// || Logical OR
// ! Logical NOT

// let a = '2' 
// let b =2;
// let c = '2';
// let d = false;

// console.log(a ==b && a == c); // if both conditions are true its givin true esle false 
// console.log(a ==b || a == c); // if any onf the one  conditions are true its givin true
// console.log(!d) // if return opposite result if true give false and if false give true


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// 5. Unary Operators
// + Unary plus (converts an operand into a number)
// - Unary minus
// ++ Increment
// -- Decrement

// let a = 2;
// let b = '3';
// let c = 4;
// let d = 5;
// let ex1 = a+b+c+d;  // 2345  
// let ex2 = a+c+b+d;  // 635 its look like (2+3) + '3' + 5  jsexecute from left to right
// let ex3 = a+c+d+b;  // 113 its look like (2+4+5) + '3'  jsexecute from left to right
// console.log(ex1);
// console.log(ex2);
// console.log(ex3);
// console.log(typeof ex1); // if we want to plus the number and string its auto  convert into string
// console.log(typeof ex2)
// console.log(typeof ex3)
// all the above examples all result typeof is string becouse the join a string and auto convert into string

// here comes the solution of this condition



// unary plus

// let a = 2;
// let b = '3';
// let c = 4;
// let d = 5;

// let ex1 = a+ +b+c+d;  // 14  we use unary + with before b variable it convert b itno number 
// // let ex2 = a+c+b++d; // imp:a+c+b++d you cannot use unary operator like this b++d you have to give space like b+ +d;
// let ex3 = a+c+d+ +b;  //14 result 14
// console.log(ex1);
// // console.log(ex2);
// console.log(ex3);
// console.log(typeof ex1); 
// // console.log(typeof ex2)
// console.log(typeof ex3)

// let a = '20';
// let b = +a
// console.log(b); // convert string into number


// let c = 'java';
// let d = +c
// console.log(d); // if the value of string not able to convert into number it returns NaN as Result

// result of typeof examples this time is number 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// unary minus: 


// let  a = 5;
// let b = -a;  // convert positive value into nagative value
// console.log(b);

// let c = -10;
// let d = -c;
// console.log(d); // convert negative into positive value

// let e = '55';
// let f = -e;
// console.log(f); // convert string into number

// let g = 'aka';
// let h = -g;
// console.log(h); // if the value of string not able to convert into number it returns NaN as Result

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// ++ increment operator

// let a = 5;
// console.log(a); // Output: 5

// let b = a++; // b gets the original value of a (5), then a is incremented and a is now 6
// let c = ++a; //use ++ before a so its increse first and then give us result  7  (6+1)

// console.log(a); // Output: 7 we override the value of a by increment operatore use so its 7 now
// console.log(b); // Output: 5
// console.log(c); // Output: 7

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// -- Decrement operator

// let a = 10;
// console.log(a); // Output: 5

// let b = a--; // b gets the original value of a (10), then a is decrement and a is now 9
// let c = --a; //use -- before a so its decrese first and then give us result   8 (9-1)

// console.log(a); // Output: 8 we override the value of a by decrement operatore use so its 8 now
// console.log(b); // Output: 10
// console.log(c); // Output: 8


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 7. Ternary Operator (Conditional Operator)
// condition ? expr1 : expr2 If the condition is true, expr1 is returned; otherwise, expr2 is returned.


// let a = 2;
// let b = 2;

// a==b ? console.log('its matching') : console.log('not matching');

// If the condition is true, its matching print on console ; otherwise, not matching print on console.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 8. Type Operators
// typeof Returns a string indicating the data type of an operand.
// instanceof Checks if an object is an instance of a specific class or constructor.

// let a = 'java';
// console.log(typeof a); //string

// function Demo(name,pass){
//     this.name = name;
//     this.pass = pass;

// };

// Demo.prototype.detail = function fulldetail(){
//  return (`${this.name} is name and ${this.pass} is password`);
// }

// let a = new Demo('java',123);
// console.log(a.detail());




// class Demo{
//     constructor(name,pass){
//         this.name = name;
//         this.pass = pass;
//     }

//     detail(){
//         return (`${this.name} is name and ${this.pass} is password`);
//     }
// }

// let a = new Demo('java',123);

// console.log(a.detail())
// console.log(a instanceof(Demo));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 9. Other Operators:
// , Comma operator (evaluates multiple expressions, returning the last one)
// in : Checks if a property exists in an object
// delete : Deletes a property from an object
// new : Creates an instance of an object constructor
// void : Specifies an expression to be evaluated without returning a value




// comma operator is use to saprate 

// let a = (1,2,3,4);
// let [b,c] = [2,3] 


// let arr= ['ankit','prakesh'];
// let [name1,name2] = arr;
// console.log(name1 , name2 );

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// in operator

// let obj = {
//         name:'java',
//         sccond : 'javaScript'
// }
// console.log('name' in obj); // true  you have to give the key of the object 

// let arr = ['java','javascript','python'];
// console.log(1 in arr); //true
// console.log(3 in arr);  //false  you have to give the index of an element


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// delete operator

// let arr = ['java','javaScript','python'];
// delete arr[0];
// console.log(arr);

// let obj = {
//         language : 'javaScript',
//         backend : 'nodeJs'
// }
// delete obj.language;
// console.log(obj);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// new operator

// function Demo(frontend,backend){

//         this.frontend = frontend;
//         this.backend = backend
// }

// Demo.prototype.detail = function(){
//         return `the frontend language is ${this.frontend} and the backend language is ${this.backend}`
// }

// let a = new Demo('javaScript','nodeJs');
// console.log(a.detail());


// class Demo{
//         constructor(frontend,backend){
//                 this.frontend = frontend
//                 this.backend = backend
//         }

//         detail(){
//                 return `the frontend language is ${this.frontend} and the backend language is ${this.backend}`
//         }
// }


// let a = new Demo('javaScript','nodeJs');
// console.log(a.detail());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






