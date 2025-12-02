// performance optimization using bottleneck
// bottleneck means a point of congestion or blockage that slows down the overall performance of a system.
// In web applications, bottlenecks can occur due to various reasons such as high traffic, inefficient code, or limited resources.
// To mitigate bottlenecks, we can use the 'bottleneck' library to limit the number of requests being processed at a time.
// use cam use profiling tools and monitoring tools to identify bottlenecks in your application and optimize them accordingly.
// optimize datbase queries, use caching, and improve code efficiency to reduce bottlenecks and enhance performance.

// install following package before using this code:
// npm install bottleneck

// const http = require('http');
// let memoryLeakArray = [];

// function blockEventLoop(){
//     const start = Date.now();
//     while(Date.now() - start < 500){
//     }
// }

// function simulateMemoryLeak(){
//     const largeObject = new Array(1000000).fill('memleak');
//     memoryLeakArray.push(largeObject);
// }

// function inefficientQuerySimulation(){
//     const data = Array.from({length: 100000}, () => Math.random());
//     for(let i=0; i<100; i++){
//         data.sort();
//     }
// }

// http.createServer((req, res) => {
//     blockEventLoop();
//     simulateMemoryLeak();
//     inefficientQuerySimulation();
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Performance Bottleneck Simulated\n');
// }).listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });


// To run the server, use the command: node bottleneck.js
// create new terminal and use the command: npm install -g autocannon
// then use: autocannon http://localhost:3000

// ************************************************************************ //

// const http=require('http')
// let memoryLeakArray=[]

// function blockEventLoop(callback){
//     setTimeout(callback,500)
// }

// function simulateMemoryLeak(){
//     const largeObject=new Array(1000000).fill('memleak')
//     memoryLeakArray.push(largeObject)
//     if(memoryLeakArray.length>10){
//         memoryLeakArray.shift()
//     }
// }

// function inefficientQuerySimulation(callback){
//     setTimeout(callback,100)
// }

// http.createServer((req,res)=>{
//     blockEventLoop(()=>{
//         simulateMemoryLeak()
//         inefficientQuerySimulation(()=>{
//             res.writeHead(200, {'Content-Type': 'text/plain'})
//             res.end("Performance bottleneck resolved\n")
//         })
//     })
// }).listen(3001, ()=>console.log("server running"))

// ************************************************************************ //


// code by vedant 

// Performance Optimization --> avoid, identify and fix bottleneck-memory leaks - profiling tools, monitoring tools
                            // --> optimizing the database queries
                            // --> caching

// bottleneck --> a part in process which is slowest of all


const http = require('http')
const { callbackify } = require('util')
let memoryLeakArray = []

function blockEventLoop(callback){
    // const start = Date.now()
    // while(Date.now-start<500){

    // }

    setTimeout(callback,500)
}

function simulateMemoryLeak(){
    const largeObject = new Array(1000000).fill('memleak')
    memoryLeakArray.push(largeObject)
    if(memoryLeakArray.length>10){
        memoryLeakArray.shift()
    }
}

function inefficientQuerySimulation(callback){
    // const data = Array.from({length:100000}, () => Math.random())
    // for(let i=0; i<100; i++){
    //     data.sort()
    // }

    setTimeout(callback,100)
}

http.createServer((req,res) => {
    blockEventLoop(() => {
        simulateMemoryLeak()
        inefficientQuerySimulation(() => {
            res.writeHead(200, {'Content-Type':'text/plain'})
            // res.end("Performance bottleneck simulated")
            res.end("Performance bottleneck resolved")
        })
    })
}).listen(3000, () => console.log("Server Running"))