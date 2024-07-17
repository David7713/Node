


// CommonJS (CJS)
// CommonJS is a module system used primarily in Node.js for structuring and organizing JavaScript code. Here are the key points about CommonJS:

// Usage: CommonJS modules are used in Node.js and were historically used in server-side JavaScript environments.
// Syntax: CommonJS modules use require() to import modules and module.exports or exports to export functionality.
// Synchronous: Module loading in CommonJS is synchronous, meaning dependencies are loaded and executed in a blocking manner.



// Importing the module and accessing the exported property
const hello = require("./CommonTesting.js");
console.log(hello.sayHello);// Output: I'm Saying Hello!

