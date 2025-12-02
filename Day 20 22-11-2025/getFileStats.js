// class tasks 

// Display File Statistics Using fs and path Modules – 5 Marks Objective: Use Node.js fs and path modules to read a file and display its statistics. Marks Distribution:

// Correct usage of fs and path modules: 2 marks

// Ability to extract file size, creation date, last modified date, and directory name: 2 marks

// Code readability and structure (comments, naming): 1 mark


// Import modules
// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "sample.txt"); // file path
// try {
//     const stats = fs.statSync(filePath);

//     console.log("File Statistics");
//     console.log("File Size:", stats.size, "bytes"); // file size
//     console.log("Creation Date:", stats.birthtime); // Creation Date
//     console.log("Last Modified:", stats.mtime); // Last Modified
//     console.log("Directory Name:", path.dirname(filePath)); // Directory Name

// } catch (err) {
//     console.error("Error reading file:", err.message);
// }

// ********************************************************************* //

// Function to run the transformation pipeline

// function toUpperCase(str) {
//     return str.toUpperCase(); // Uppercase conversion
// }

// function reverseString(str) {
//     return str.split('').reverse().join(''); // Split, reverse, join
// }

// function appendSuffix(str) {
//     return str + "_DONE"; // Append suffix
// }

// //  Pipeline 

// function runPipeline(inputStr) {
//     // Apply transformations sequentially
//     let result = toUpperCase(inputStr); 
//     result = reverseString(result);      
//     result = appendSuffix(result);       
//     return result;
// }

// //  Input Handling 

// const inputString = process.argv[2]; // Get argument

// if (!inputString) {
//     console.error("Usage: node stringPipeline.js \"your string here\"");
//     process.exit(1); 
// }

// try {
//     const finalResult = runPipeline(inputString);
//     console.log("Original:", inputString);
//     console.log("Transformed:", finalResult);
// } catch (error) {
//     console.error("Error:", error.message); // Handle errors
// }



// ********************************************************************* //

// // Function to run the transformation pipeline
// function runPipeline(inputStr) {
//     // Pipeline: Uppercase -> Reverse -> Append Suffix
//     const reversedUpper = inputStr.toUpperCase().split('').reverse().join('');
//     return reversedUpper + "_DONE"; 
// }

// // --- Input Handling (CLI) ---

// const inputString = process.argv[2]; // Get input from command line

// if (!inputString) {
//     console.error("Usage: node shortPipeline.js \"input string\"");
//     process.exit(1); 
// }

// // Display results
// console.log("Original:", inputString);
// console.log("Transformed:", runPipeline(inputString));

// ********************************************************************* //




