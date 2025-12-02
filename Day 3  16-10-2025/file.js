//  for this day, following are topics 
//Event - action or occurance
//EventEmitter class is used to handle events
//Listners/Handlers
// EventEmitter
// events
// on and emit and once 
// removeListner offf removeAllList
//  node js event handling example




// const EventEmitter = require('events');

// // Create an instance of EventEmitter
// const eventEmitter = new EventEmitter();
// // Define an event handler
// const eventHandler = () => {
//     console.log('Event occurred!');
// }
// // Assign the event handler to an event
// eventEmitter.on('myEvent', eventHandler);
// // Trigger the event
// eventEmitter.emit('myEvent');
// // Remove the event handler
// eventEmitter.removeListener('myEvent', eventHandler);
// // Trigger the event again to show that the handler has been removed
// eventEmitter.emit('myEvent');
// // Output will be:
// // Event occurred!
// // (No output after the second emit since the handler has been removed)
// // ************************************************ //

// const EventEmitter=require('events')
// const myEmitter=new EventEmitter();
// myEmitter.on('greet',() => {
//     console.log('Event handling example')
// });

// myEmitter.emit('greet')

// ************************************************ //

// const EventEmitter=require('events')
// const myEmitter=new EventEmitter();

// myEmitter.on('greet', (name) => {
//     console.log('Greetings ' + name)
// });

// myEmitter.on('greet', (name) => {
//     console.log('ANother message to ' + name)
// });

// myEmitter.emit('greet', 'Athmaja')
// ************************************************ //

// simple user login notification system
// 'userLoggedIn' username age city

// const EventEmitter = require('events');
// const notificationEmitter = new EventEmitter();

// // --- 1. Define the Listener (The Notification System) ---

// // This listener is responsible for generating the notification message.
// notificationEmitter.on('userLoggedIn', (username, age, city) => {
//     console.log(`--- NEW USER LOGGED IN ---`);
//     console.log(`Notification Sent!`);
//     console.log(`User: ${username}`);
//     console.log(`Age: ${age}`);
//     console.log(`Location: ${city}`);
//     console.log('--------------------------');
// });

// // --- 2. Simulate a Login Action (Emit the Event) ---

// // When a user successfully logs in, the 'userLoggedIn' event is emitted 
// // with the user's data as arguments.
// console.log('User login attempt successful...');

// notificationEmitter.emit('userLoggedIn', 'Alice', 30, 'New York');

// // --- Optional: Simulate a second login ---
// notificationEmitter.emit('userLoggedIn', 'Bob', 24, 'London');

// ************************************************ //

// const EventEmitter = require('events')
// const myEmitter = new EventEmitter();

// function greetUser(name) {
//     console.log('Greetings ' + name)
// }

// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// myEmitter.on('greet', greetUser);
// myEmitter.on('greet', sayHello);

// console.log('--- First Emit (Both Listeners Active) ---');
// myEmitter.emit('greet', 'Athmaja')

// myEmitter.removeListener('greet', greetUser);

// console.log('--- Second Emit (One Listener Removed) ---');
// myEmitter.emit('greet', 'Athmaja')

// ************************************************** //

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// // --- 1. Define the Listener Functions ---

// function logMessage(name) {
//     // This is the listener we will remove later
//     console.log(`Listener 1: Logging message for ${name}`);
// }

// function sendAlert(name) {
//     // This listener will remain active
//     console.log(`Listener 2: Sending alert for ${name}`);
// }

// // --- 2. Attach Both Listeners ---
// myEmitter.on('userEvent', logMessage);
// myEmitter.on('userEvent', sendAlert);

// // --- 3. First Emit (Both fire) ---
// console.log('--- First Event (Both Listeners Active) ---');
// myEmitter.emit('userEvent', 'User A'); 

// // --- 4. Remove a Listener ---
// // Use the exact function reference to remove it from the 'userEvent' list
// myEmitter.removeListener('userEvent', logMessage);

// // --- 5. Second Emit (Only the remaining one fires) ---
// console.log('\n--- Second Event (Listener 1 is Removed) ---');
// myEmitter.emit('userEvent', 'User B');

// ************************************************** //

// const EventEmitter = require('events');
// const cartEmitter = new EventEmitter();

// // --- 1. Define Listeners (The 4 Handlers) ---

// function inventoryUpdater(item) {
//     console.log(`✅ Inventory: Decremented stock count for item: ${item.name}`);
// }

// function logger(item) {
//     // A function to log the event to a database or file
//     console.log(`📝 Logger: Recorded 'itemAdded' event for ID: ${item.id}`);
// }

// function notificationSender(item) {
//     // A function to send a user notification
//     console.log(`🔔 Notifier: Sent confirmation to user for: ${item.name}`);
// }

// function pricingCalculator(item) {
//     // A function to re-calculate the total price
//     const total = item.price * item.quantity;
//     console.log(`💰 Pricing: Recalculated total, added $${total.toFixed(2)}.`);
// }

// // --- 2. Attach All 4 Listeners to the Same Event ---
// cartEmitter.on('itemAdded', inventoryUpdater);
// cartEmitter.on('itemAdded', logger);
// cartEmitter.on('itemAdded', notificationSender);
// cartEmitter.on('itemAdded', pricingCalculator);

// // --- 3. Emit the Event (The Action) ---

// const newItem = {
//     id: 'SKU789',
//     name: 'Wireless Mouse',
//     price: 25.50,
//     quantity: 2
// };

// console.log(`\nUser is adding item: ${newItem.name} (Qty: ${newItem.quantity})...\n`);

// // Triggering the 'itemAdded' event calls all four listeners instantly.
// cartEmitter.emit('itemAdded', newItem);

// ************************************************** //
// const EventEmitter = require('events');

// const shopping = new EventEmitter();

// shopping.on('itemAdded', (itemName) => {
//     console.log(`Item named ${itemName} added to the cart`);
// })

// let cart = [];
// let items = [
//     { name: 'soap', price: 85.99 },
//     { name: 'toothpaste', price: 150 },
//     { name: 'bread', price: 50 },
//     { name: 'butter', price: 60 }
// ]

// function addItem(item) {
//     cart.push(item);
//     shopping.emit('itemAdded', item.name);
// }

// console.log(cart)
// for(let item of items){
//     addItem(item);
// }
// console.log(cart) 

// ************************************************** //

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// function itemAdded(item){
//   console.log(`Item : ${item} added successfully .`);
// }

// myEmitter.on('addItem', itemAdded);

// const items = ['ColdDrink', 'Pepsi', 'Lays', 'WaterMelon'];

// const cart = [];

// for(let i = 0 ; i < 4 ; i++){
//   myEmitter.emit('addItem', items[i]);
//   cart.push(items[i]);
// }

// console.log(cart);

// ************************************************** //

// const EventEmitter = require('events');

// class ShoppingCart extends EventEmitter {
//     constructor() {
//         super();
//         this.count = 0; 
//     }

//     addProduct(productName) {
//         this.count++;
//         this.emit('productAdded', productName, this.count);
//     }
// }

// const cart = new ShoppingCart();

// cart.on('productAdded', (name, total) => {
//     console.log(` ${name} added to cart. Total items: ${total}`);
// });

// cart.addProduct('laptop');
// cart.addProduct('mango');

// ************************************************** //

// const EventEmitter = require('events');

// // --- Define the Chatroom Class ---
// class Chatroom extends EventEmitter {
//     constructor() {
//         super();
//         this.users = new Set();
//     }

//     // Action: User joins the room and emits the 'join' event
//     join(username) {
//         if (this.users.has(username)) return;
//         this.users.add(username);
//         this.emit('join', username); 
//     }

//     // Action: User leaves the room and emits the 'leave' event
//     leave(username) {
//         if (!this.users.has(username)) return;
//         this.users.delete(username);
//         this.emit('leave', username);
//     }

//     // Action: User sends a message and emits the 'message' event
//     sendMessage(username, message) {
//         if (!this.users.has(username)) return;
//         this.emit('message', username, message); 
//     }
// }

// // --- Usage and Listeners ---
// const globalChat = new Chatroom();

// // Listener: Responds when a 'join' event is emitted
// globalChat.on('join', (user) => {
//     console.log(`[🟢 JOIN] ${user} entered.`);
// });

// // Listener: Responds when a 'message' event is emitted
// globalChat.on('message', (user, msg) => {
//     console.log(`[💬 MSG] ${user}: ${msg}`);
// });

// // Simulate activity
// globalChat.join('Chris');
// globalChat.join('Jordan');
// globalChat.sendMessage('Chris', 'Hello everyone!');
// globalChat.leave('Jordan');

// ************************************************** //

// Classroom eventEmitter

// const EventEmitter = require('events');

// const myEventEmitter = new EventEmitter();

// class Chatroom{
//   username;
  
//   join(username){
//     console.log(`Joined ${username} .`);
//   }
  
//   leave(username){
//     console.log(`${username} leaved .`);
//   }
  
//   sendMessage(username){
//     console.log(`${username} just sent a message .`);
//   }
  
// };

// const chat = new Chatroom();

// myEventEmitter.on('join', chat.join);
// myEventEmitter.on('message', chat.sendMessage);
// myEventEmitter.on('leave', chat.leave);

// myEventEmitter.emit('join', 'Shani');
// myEventEmitter.emit('join', 'Shravanii');

// myEventEmitter.emit('message', 'Shani');
// myEventEmitter.emit('message', 'Shravani');

// myEventEmitter.emit('join', 'Ankit');
// myEventEmitter.emit('join', 'Krushna');

// myEventEmitter.emit('message', 'Ankit');

// myEventEmitter.emit('message', 'Shani');

// myEventEmitter.emit('leave', 'Shani');
// myEventEmitter.emit('leave', 'Ankit');

// ************************************************** //

const EventEmitter = require("events");

class Chatroom extends EventEmitter {
  join(username) {
    this.emit("userJoined", username);
  }

  leave(username) {
    this.emit("userLeft", username);
  }

  sendMessage(username, message) {
    this.emit("messageSent", username, message);
  }
}

const chatroom = new Chatroom();

chatroom.on("userJoined", (username) => {
  console.log(`${username} has joined...`);
});

chatroom.on("userLeft", (username) => {
  console.log(`${username} has left...`);
});

chatroom.on("messageSent", (username, message) => {
  console.log(`${username}: ${message}`);
});

chatroom.join("Aditya");
chatroom.sendMessage("Aditya", "Hello everyone!");
chatroom.join("Ujjwal");
chatroom.sendMessage("Ujjwal", "Hi Aditya!");
chatroom.leave("Aditya");
chatroom.sendMessage("Ujjwal", "Goodbye Aditya!");