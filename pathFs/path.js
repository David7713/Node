// Overview: 
// This script demonstrates basic file and path operations in Node.js using the built-in 'path' and 'fs' (file system) modules.
// It shows how to resolve the current directory, construct file paths, parse file paths, and perform asynchronous file operations.
// The path module provides utilities for working with file and directory paths. It’s built-in to Node.js core and can simply be used by requiring it.



import path from "path"; // Import the 'path' module for handling and transforming file paths.

// Get the absolute path of the current directory.
const currentDir = path.resolve();

// Print the current directory path to the console (commented out).
// console.log(currentDir);

// Create a path to a file named 'path.js' in the current directory.
const filePath = path.join(currentDir, "path.js");

// Print the file path to the console (commented out).
// console.log(filePath);

// Parse the file path and print the parsed object to the console.
console.log(path.parse(filePath));