// ```
// Error-Problem occured in your program during execution

// types of Errors-
//     Programmatic Errors-Compile time errors/syntax errors
//         -Runtime errors/logic errors
//     Operational Errors-network issues
//         -Database connectivity issues
//         -File issues
//     Functional errors-domain errors

// NodeJS-will help you to handle errros in graceful manner.

//     nodeJs many error handling techniques
//         - Use Error Object
// ```


const err=new Error("something went wrong");
console.log(err.stack);

throw new Error("I am an error object");