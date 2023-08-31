// In-depth explanation of the `let` and `const` keywords in JavaScript.

// Both `let` and `const` are introduced in ECMAScript 6 (ES6) and are used for declaring variables. They offer improved scoping rules and block-level scope compared to the older `var` keyword.


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// **`let`**:

// 1. **Block Scope:** Variables declared with `let` are block-scoped, which means they are only accessible within the block (a set of curly braces `{}`) in which they are defined.

// 2. **Variable Reassignment:** Variables declared with `let` can be reassigned with a new value after their initial assignment.

// 3. **Temporal Dead Zone (TDZ):** When you declare a variable with `let`, it's still hoisted to the top of its block, but you cannot access it before its declaration. This period is called the Temporal Dead Zone.

// 4. **No Redefinition:** You cannot re-declare the same variable in the same scope using `let`.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// **`const`**:

// 1. **Block Scope:** Like `let`, variables declared with `const` are block-scoped.

// 2. **Constant Values:** Variables declared with `const` must be assigned a value at the time of declaration, and this value cannot be changed afterward. It creates a read-only reference to the assigned value.

// 3. **Object Mutation:** While the value itself in a `const` variable cannot be reassigned, if the value is an object, the properties of the object can still be mutated.

// 4. **Temporal Dead Zone (TDZ):** Similar to `let`, `const` variables are also affected by the Temporal Dead Zone.

// 5. **No Redefinition:** Like `let`, you cannot re-declare the same variable in the same scope using `const`.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// **Key Points:**

// - Use `let` when you need to reassign the variable.
// - Use `const` when you want to ensure that a variable's value remains constant.
// - Prefer using `const` for variables that won't be reassigned, as it makes your intentions clear and helps prevent accidental reassignment.
// - For objects and arrays declared with `const`, the variable itself cannot be reassigned, but the properties or elements within the object or array can still be modified.


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Examples:

// // Using let
// let count = 0;
// count = 1; // Reassignment allowed

// // Using const
// const pi = 3.14;
// // pi = 3.14159; // Error: Assignment to constant variable

// const person = { name: "Alice" };
// person.age = 30; // Valid: Mutating properties of the object
// // person = { name: "Bob" }; // Error: Assignment to constant variable




