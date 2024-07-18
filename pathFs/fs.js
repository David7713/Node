// File System or fs module is a built in module in Node that enables interacting with the file system using JavaScript. All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules.


import fs from 'fs'; // Import the 'fs' (file system) module for file operations.
import path from 'path'; // Re-import the 'path' module (unnecessary if already imported above).

// Get the absolute path of the current directory.
const currentDir = path.resolve();

// Create a path to a file named 'newFile.txt' in the current directory.
const filePath = path.join(currentDir, "newFile.txt");

// Asynchronously read the content of the file 'newFile.txt' using a callback function (commented out).
// fs.readFile(filePath, "utf8", function(error, text) {
//     console.log(text);
// });

// Asynchronously read the content of the file 'newFile.txt' using Promises (commented out).
// fs.promises.readFile(filePath, 'utf8').then((text) => {
//     console.log(text);
// });

// Asynchronously write the string "Hei There" to the file 'newFile.txt' (commented out).
// fs.promises.writeFile(filePath, "Hei There");

// Asynchronously delete the file 'newFile.txt' (commented out).
// fs.promises.unlink(filePath);