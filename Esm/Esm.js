// Esm.mjs
// ECMAScript Modules (ESM or ES Modules)
// ECMAScript Modules are the standard module system introduced in ECMAScript (ES6) for JavaScript. Here’s how it handles import and export:
// Syntax: ESM uses import to import modules and export to export functionality. It supports named exports, default exports, and namespace imports.
// Asynchronous: ESM supports asynchronous module loading, improving performance in certain 
// Importing: Modules are imported using the import statement.

// Importing functions and variables from EsmTesting.mjs module
import { sayHello } from '../Esm/EsmTesting.js';  // Importing the sayHello function
import { Yell } from '../Esm/EsmTesting.js';       // Importing the Yell function
import { number } from '../Esm/EsmTesting.js';     // Importing the number variable

// Calling imported functions and logging imported variable
sayHello();        // Output: Saying Hello
Yell();            // Output: Yelling
console.log(number);  // Output: 100
