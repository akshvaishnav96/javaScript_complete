// // Template literals use backticks (``) instead of single or double quotes.

// // features and capabilities of template literals:

// // 1. **String Interpolation:**
// //    Template literals allow you to interpolate variables and expressions directly into the string using `${}` syntax. This eliminates the need for manual concatenation.

//    const name = "javaScript";
//    const message = `Hello, ${name}!`;
//    // Result: "Hello, javaScript!"

// // 2. **Multiline Strings:**
// //    Template literals can span multiple lines without requiring escape characters or concatenation. The actual line breaks are preserved in the resulting string.

//    const multiLine = `
//    This is a
//    multiline
//    string.`;

// // 3. **Escaping Characters:**
// //    You can include special characters and escape sequences inside template literals just like regular strings.

//    const specialChars = `Special characters: \n\t\\'`;

// // 4. **Expression Evaluation:**
// //    Any JavaScript expression inside `${}` will be evaluated and the result will be included in the string.

//    const a = 5;
//    const b = 10;
//    const sum = `The sum of ${a} and ${b} is ${a + b}.`;
//    // Result: "The sum of 5 and 10 is 15."



// // 6. **Nested Template Literals:**
// //    Template literals can be nested inside each other to create more complex string structures.

//    const nested = `Outer: ${`Inner: ${a}`}`;
//    // Result: "Outer: Inner: 5"

// // Template literals provide a cleaner and more readable way to create strings, especially when dealing with dynamic content and expressions. They are widely used for creating HTML templates, generating URLs, formatting log messages, and more.