// define a class with constructor

// class Animal {
//     constructor(name, color,voice) {
//       this.name = name;
//       this.color = color;
//       this.voice = voice;
//     }

//     makeSound() {
//           console.log(`animal ${this.name} making sound of ${this.voice} and the color is ${this.color}`);

//     }

//   }

//   let monkey = new Animal('monkey','brown','Chatter');

//   monkey.makeSound();

//   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   define a class without constructor you can define methods for setting it

// class Animal {
//   setname(name) {
//     this.name = name;
//   }

//   setcolor(color) {
//     this.color = color;
//   }

//   setvoice(voice) {
//     this.voice = voice;
//   }

//   makeSound() {
//     console.log(
//       `animal ${this.name} making sound of ${this.voice} and the color is ${this.color}`
//     );
//   }
// }

// let monkey = new Animal();
// monkey.setname('monkey')
// monkey.setcolor('brown')
// monkey.setvoice('chatter')
// monkey.makeSound();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Inheritance:


// class Animal {
//         constructor(name, color,voice) {
//           this.name = name;
//           this.color = color;
//           this.voice = voice;
//         }
    
//         makeSound() {
//               console.log(`animal ${this.name} making sound of ${this.voice} and the color is ${this.color}`);
    
//         }

    
//       }



// class Dog extends Animal {
//     constructor(name,color,voice,breed) {
//       super(name,color,voice); // Call the parent class constructor
//       this.breed = breed;
//     }
  
//     dogsound() {
//       console.log(`${this.name} is ${this.voice} like Woof woof!`);
//     }

     
//   }

//   let dog = new Dog('tommy',"white", 'bark','labrador');''

//   dog.dogsound();



//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
// // Static Method:

// class Animal {
//     constructor(name, color,voice) {
//       this.name = name;
//       this.color = color;
//       this.voice = voice;
//     }

//     makeSound() {
//           console.log(`animal ${this.name} making sound of ${this.voice} and the color is ${this.color}`);

//     }

//     static nameToUpper(x) {
//         return x.toUpperCase();
//     }

//   }



// class Dog extends Animal {
// constructor(name,color,voice,breed) {
//   super(name,color,voice); // Call the parent class constructor
//   this.breed = breed;
// }

// dogsound() {
//   console.log(`${this.name} is ${Animal.nameToUpper(this.voice)} like Woof woof!`); // access like this 
// }

 
// }


// let dog = new Dog('tommy',"white", 'bark','labrador');''

// dog.dogsound();


// console.log(Dog.nameToUpper('dog')); // also you can use like this



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // Getter and Setter Methods:


// // Note: if you are trying to use getter you also have to define his setter too


// class Animal {
//     constructor(name, color) {
//       this._name = name;
//       this._color = color;
//     }
  
//     get name() {
//       return (this._name).toUpperCase();
//     }
  
//     set name(newname) {
//         this._name = newname;
//     }
//   }

//   let dog = new Animal('tommy','white');

//   console.log(dog.name);

  
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Class Expressions


// let Animal = class {           // you can also define class like this using expressions
//     constructor(name, color) {
//       this.name = name;
//     }
  
//   }
//   let dog = new Animal('tommy');

//   console.log(dog.name);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++