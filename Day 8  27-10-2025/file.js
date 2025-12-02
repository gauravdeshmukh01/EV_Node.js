// function calculateRatio(x, y) {
//     try {
//         if (!Number.isInteger(x) || !Number.isInteger(y)) {   // can be used NaN
//             throw new Error("both inputs must be integers");
//         }

//         if (y === 0) {
//             throw new Error("division by zero is not allowed");
//         }

//         let ratio = x / y;
//         return `${ratio}`;
//     } catch (error) {
//         return `Error: ${error.message}`;
//     }
// }

// console.log(calculateRatio(50, 5));
// console.log(calculateRatio(900, 3));
// console.log(calculateRatio(75, 0));

// ******************************************************************* //

// function divide(x, y, cb) {
//     try {
//         if (!Number.isInteger(x) || !Number.isInteger(y)) {
//             throw new Error("both must be int");
//         }

//         if (y === 0) {
//             throw new Error("zero not allowed");
//         }

//         let ratio = x / y;
        
//         cb(null, ratio); 

//     } catch (error) {
//         cb(`error: ${error.message}`, null);
//     }
// }

// let a = 100;
// let b = 10;

// divide(a, b, (err, res) => {
//     if (err) {
//         console.log(`result for ${a}/${b}: ${err}`);
//     } else {
//         console.log(`result for ${a}/${b}: ${res}`);
//     }
// });

// a = 40;
// b = 0;

// divide(a, b, (err, res) => {
//     if (err) {
//         console.log(`result for ${a}/${b}: ${err}`);
//     } else {
//         console.log(`result for ${a}/${b}: ${res}`);
//     }
// });


// ******************************************************************* //

// function fetchNumbers(a, b, callback) {
//     setTimeout(() => {
//         if (a === "fail") {
//             callback(new Error("Simulated network error during fetch."));
//             return;
//         }
//         callback(null, { a, b });
//     }, 1000);
// }

// function divideWithCallback(a, b) {
//     fetchNumbers(a, b, (err, data) => {
//         if (err) {
//             console.error("Error fetching numbers.", err.message);
//             return;
//         }

//         const { a, b } = data;
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             console.error("Error: Both inputs must be numbers.");
//             return;
//         }

//         if (b === 0) {
//             console.error("Error: Cannot divide by zero.");
//             return;
//         }

//         const result = a / b;
//         console.log(`Result: ${result}`);
//     });
// }

// console.log("--- Running Test Cases ---");

// console.log("Test 1: Valid Division (100 / 5)");
// divideWithCallback(100, 5);

// console.log("Test 2: Division by Zero (100 / 0)");
// divideWithCallback(100, 0);

// console.log("Test 3: Invalid Input ('ten' / 2)");
// divideWithCallback("ten", 2);

// console.log("Test 4: Invalid Input (50 / 'five')");
// divideWithCallback(50, "five");

// console.log("Test 5: Simulated Fetch Error ('fail' / 3)");
// divideWithCallback("fail", 3);

// ******************************************************************* //

// function divPromise(a, b) {
//     return new Promise((resolve, reject) => {
//         let isNum = Number.isInteger(a) && Number.isInteger(b)
//         if (!isNum) {
//             reject("please enter numbers only");
//         } else if (b === 0) {
//             reject("can't divide by zero");
//         } else {
//             resolve(a / b);
//         }
//     });
// }

// divPromise(5, 2)
//     .then((res) => console.log("Result :", res))
//     .catch((err) => console.log("Some error :", err));

// ******************************************************************* //

// function fetchData(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a === "fail") {
//                 reject(new Error("network error"));
//                 return;
//             }
//             resolve({ a, b });
//         }, 1000);
//     });
// }

// function divide(a, b) {
//     return fetchData(a, b)
//         .then(data => {
//             const { a, b } = data;

//             if (typeof a !== 'number' || typeof b !== 'number') {
//                 throw new Error("inputs must be numbers");
//             }

//             if (b === 0) {
//                 throw new Error("division by zero");
//             }

//             return a / b;
//         })
//         .then(result => {
//             console.log(`result: ${result}`);
//         })
//         .catch(error => {
//             console.error(`error: ${error.message}`);
//         });
// }

// divide(100, 5);
// divide(100, 0);

// ******************************************************************* //

// process.on('uncaughtException', (err) => {
//     console.error(`Global Error: ${err.message}`);
// });

// function divide(a, b) {
//     let isNum = Number.isInteger(a) && Number.isInteger(b);

//     if (!isNum) {
//         throw new Error("not numbers");
//     }
    
//     if (b === 0) {
//         throw new Error("zero division");
//     }

//     return a / b;
// }

// try {
//     const res1 = divide(10, 2);
//     console.log("result :", res1);
// } catch (e) {
//     console.log("local catch:", e.message); 
// }

// console.log("running uncaught test division by zero");
// const res2 = divide(10, 0); 

// console.log("running uncaught test invalid input");
// const res3 = divide("ten", 2); 

// ******************************************************************* //

// function calculate(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error("please enter number only");
//     }

//     if (y === 0) {
//         throw new Error("division by zero is not allowed");
//     }

//     return x / y;
// }

// process.on('uncaughtException', (err) => {
//     console.error("an uncaught error occurred", err.message);
// });

// console.log("result:", calculate(10, 2));
// console.log("result:", calculate(10, 0));

// ******************************************************************* //

//////////// start of express.js /////////////


