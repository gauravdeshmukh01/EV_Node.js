// just revision.

// simple code for callback function

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }
// function callMe() {
//     console.log("I am callback function");
// }
// greet("Garry", callMe);
// ************************************** //

// what is call stack?
// definition: Call Stack is a mechanism for an interpreter (like JavaScript) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

// Example of Call Stack

// function first() {
//     console.log("First function");
//     second();
//     console.log("Back to first function");
// }
// function second() {
//     console.log("Second function");
//     third();
//     console.log("Back to second function");
// }
// function third() {
//     console.log("Third function");
//     console.log("End of third function");
// }
// first();
// Output:
// First function
// Second function
// Third function
// End of third function
// Back to second function
// Back to first function
// ************************************** //

// function simulateDownload(durationInSeconds) {
//     console.log("//downlaod");
//     console.log("..strating dowloand");
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(`.. ${durationInSeconds} secs... its done`);
//             resolve("Download complete.");
//         }, durationInSeconds * 1000);
//     });
// }
// async function mainTaskFlow() {
//     try {
//         const downloadDuration = 5;
//         await simulateDownload(downloadDuration);
//         console.log("-- going ahead with the nexxt task");
//     } catch (error) {
//         console.error("An error occurred during the process:", error);
//     }
// }
// mainTaskFlow();


// method 2

// function download(){
//   setTimeout(()=>{
//     console.log("Download Complete");
//   },5000);
// }
// console.log("Starting Download...");
// download();
// console.log("Going ahead with next tasks...");
// ******************************************************** //

// callback hell example

// Simulating a morning routine with nested callbacks

// function wakeUp(callback) {
//   setTimeout(() => {
//     console.log("Woke up");
//     callback();
//   }, 1000);
// }

// function takeShower(callback) {
//   setTimeout(() => {
//     console.log("Took a shower");
//     callback();
//   }, 4000);
// }

// function eatBreakfast(callback) {
//   setTimeout(() => {
//     console.log("Ate breakfast");
//     callback();
//   }, 3000);
// }

// function leaveForSchool() {
//   setTimeout(() => {
//     console.log("Left for school");
//   }, 1000);
// }

 
// wakeUp(() => {
//   takeShower(() => {
//     eatBreakfast(() => {
//       leaveForSchool();
//     });
//   });
// });

// ************************************** //

function getProductDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = {
        id: 101,
        name: "Smartphone",
        price: 50000,
        quantity: 50
      };
      resolve(product);  
    }, 2000); 
  });
}
console.log("Fetching product details");

getProductDetails()
  .then(product => {
    console.log("Product Details:", product);
  })
  .catch(error => {
    console.error("Error:", error);
  });

console.log("Doing other tasks while waiting");





const url = "https://jsonplaceholder.typicode.com/users/1"; 

async function fetchData() {
  try {
    console.log("Fetching data");
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();








const product = {
id: 1,
name: 'mobile',
price: 30000
}


function getProduct(){
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve(product);
}, 2000);
});
}


async function fetchProduct(){
const productData = await getProduct();
console.log(productData);
}


fetchProduct();





function fetchProductDetails(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const product = {
                id: 1,
                name: "Laptop",
                price: 77000,
                quantity: 5
            };
            resolve(product);
        }, 2000);
    });
}

fetchProductDetails().then((product)=>{
    console.log("Product Details:", product);
}).catch((error)=>{
    console.error("Error fetching product details:", error);
}); 














async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } 
    catch (error) {
        console.error(error);
    }
}
fetchData();









const fetchAPI = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}
fetchAPI();













// export class Product {
//     constructor(id, name, price) {
//       this.id = id;
//       this.name = name;
//       this.price = price;
//     }
  
//     display() {
//       console.log(`${this.name} costs is ₹${this.price}`);
//     }
// }


// import { Product } from './class1.js';



// const phone = new Product(1, "Iphone", 53000);
// phone.display();






// export class Book {
//     constructor(title, author, year, numOfCopies) {
//         this.title = title
//         this.author = author
//         this.year = year
//         this.numOfCopies = numOfCopies
//     }
//     borrowBook() {
//         if (this.numOfCopies > 0) {
//             this.numOfCopies--
//             console.log(`${this.title} borrowed\nAvailable copies : ${this.numOfCopies}\n`)
//         } else {
//             console.log("Copy not available");
//         }
//     }
//     returnBook() {
//         this.numOfCopies++;
//         console.log(`${this.title} returned\nAvailable copies : ${this.numOfCopies}\n`)
//     }
// } 



// import { Book } from "./module1.js";

// const b = new Book("atomic habits", "james clear", 2012, 50);

// b.borrowBook();
// b.returnBook(); 





// export class Food {
// constructor(id, name, price, quantity) {
// this.id = id;
// this.name = name;
// this.price = price;
// this.quantity = quantity;
// }


// getInfo() {
// return `Food: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
// }
// }

// export const pizza = new Food(1, "Pizza", 250, 10

// //import { Food, pizza } from './food.js';



// // console.log(pizza);
// // console.log(pizza.getInfo());


// // const burger = new Food(2, "Burger", 150, 5);
// // console.log(burger.getInfo());


