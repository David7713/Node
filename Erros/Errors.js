// // Error Handling
// // Error handling is a critical aspect of programming that ensures your application can gracefully handle unexpected situations and continue to operate or fail gracefully. In JavaScript, error handling involves detecting, managing, and responding to errors that occur during the execution of a program.

// Basic Concepts
// Try...Catch Statement:

// try block: Code that may throw an error is placed here.
// catch block: Code to handle the error is placed here.
// finally block: Code that will run regardless of whether an error occurred or not.
// javascript

// try {
//   // Code that may throw an error
// } catch (error) {
//   // Code to handle the error
// } finally {
//   // Code to run regardless of the error
// }
// Throwing Errors:

// You can throw custom errors using the throw statement.
// javascript

// if (someCondition) {
//   throw new Error('Custom error message');
// }
// Error Object:

// Errors in JavaScript are represented by the Error object, which includes properties like name and message.
// Types of Errors
// JavaScript Errors:

// Syntax Errors: Errors due to incorrect syntax.
// javascript

// // SyntaxError: Unexpected token
// const a = ;
// Reference Errors: Errors due to referencing a variable that is not declared.
// javascript

// // ReferenceError: x is not defined
// console.log(x);
// Type Errors: Errors due to performing an operation on the wrong data type.
// javascript

// // TypeError: x.toUpperCase is not a function
// let x = 5;
// x.toUpperCase();
// Range Errors: Errors due to a number being outside an allowable range.
// javascript

// // RangeError: Invalid array length
// let arr = new Array(-1);
// URI Errors: Errors related to incorrect usage of global URI handling functions.
// javascript

// // URIError: URI malformed
// decodeURIComponent('%');
// System Errors:

// System errors are errors related to the environment in which the application is running, such as network issues, file system errors, or other I/O errors.
// They often include an error code and a system-specific error message.
// Examples include:

// Network Errors: Errors that occur when making network requests.
// javascript

// fetch('http://nonexistent-url.com')
//   .then(response => response.json())
//   .catch(error => console.error('Network Error:', error));
// File System Errors: Errors that occur when interacting with the file system (common in Node.js).
// javascript

// const fs = require('fs');
// fs.readFile('nonexistent-file.txt', (err, data) => {
//   if (err) {
//     console.error('File System Error:', err);
//   }
// });