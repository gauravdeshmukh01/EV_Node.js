// streams means a sequence of data over time 
//   4 types ->  readable, writable, duplex, transform
// data and error close events


// 1. readable stream

// const fs=require('fs')

// const readStream=fs.createReadStream('input.txt',{
//   encoding:'utf8',
//   highWaterMark:16
// });

// readStream.on('data',chunk=>{
//   console.log('Received chunk:',chunk)
// });

// readStream.on('end',()=> {
//   console.log('Reading completed')
// });

// readStream.on('error',err=>{
//   console.log('Error',err)
// });

// ********************************************************** //

// 2. writable stream

// const fs=require('fs');

// const writeStream=fs.createWriteStream('output.txt');
// writeStream.write('Hello World\n');
// writeStream.write('This is a writable stream example.\n');
// writeStream.end('Stream ended.\n');          // after this no more data can be written

// writeStream.on('finish',()=>{
//   console.log('All data written to file.')
// });

// writeStream.on('error',err=>{
//   console.log('Error',err)
// });

// ********************************************************** //

// 3. piping streams      connecting one stream to another
// baclkpressure handling

// const fs=require('fs');

// fs.createReadStream('input.txt')
// .pipe(fs.createWriteStream('sample.txt'));

// ********************************************************** //

// 4. transforming streams  (modify data while passing through)

// const fs=require('fs')

// const zlib=require('zlib')

// const gzip=zlib.createGzip();

// fs.createReadStream('input.txt')
// .pipe(gzip)
// .pipe(fs.createWriteStream('input.txt.gz'))

// ********************************************************** //

// const http=require('http')
// const fs=require('fs')

// http.createServer((req,res)=>{
//   const stream=fs.createReadStream('input.txt');
//   stream.pipe(res)
// }).listen(3000);

// ********************************************************** //

// const fs=require('fs')

// async function readStream(){
//   const stream=fs.createReadStream('input.txt',{encoding:'utf8'})

//   for await(const chunk of stream){
//     console.log(chunk)
//   }
// }

// readStream();

// ********************************************************** //

// const fs=require('fs')
// const net = require('net');

// // Create a server
// const server = net.createServer((socket) => {
//   console.log(' Client connected');

//   // socket is duplex: can read and write
//   socket.on('data', (data) => {
//     console.log(' Received:', data.toString());

//     // Echo back to client
//     socket.write(`You said: ${data}`);
//   });

//   socket.on('end', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(3000, () => {
//   console.log(' Echo server running on port 3000');
// });

// ****************************************************************** //

// use this in input.txt for below code snippet
// 10
// 2
// 4
// 5
// 9    

// const fs=require('fs')
// const {Transform}= require('stream')

// class TransformNumber extends Transform{

//     constructor(){
//         super();
//     }


//     _transform(chunk,encoding,callback){
//         let data=chunk.toString();
//         const chnagedNum=data
//         .split('\n')
//         .map(line=>{
//             const num=parseFloat(line.trim());
//             if(!isNaN(num)){
//                 return num*4
//             }
//             return line
//         })
//         .join('\n');
//         this.push(chnagedNum);
//         callback();
//     }
// }

// const inputFile='input.txt'
// const outFile='output.txt'

// const readStream=fs.createReadStream(inputFile,{encoding:'utf8'})
// const transformStream= new TransformNumber()
// const writeStream=fs.createWriteStream(outFile)

// readStream
// .pipe(transformStream)
// .pipe(writeStream)
// .on('finish', () => { 
//     console.log('Numbers are modified')
// });

// ****************************************************************** //

// convert text to uppercase using transform stream

const fs=require('fs')
const {Transform}= require('stream')

class TransformUppercase extends Transform{

    constructor(){
        super();
    }

    _transform(chunk, encoding, callback){
        let upperCaseData = chunk.toString().toUpperCase();
        this.push(upperCaseData);
        callback();
    }
}

const inputFile='input.txt'
const outFile='output.txt'

const readStream=fs.createReadStream(inputFile,{encoding:'utf8'})
const transformStream= new TransformUppercase()
const writeStream=fs.createWriteStream(outFile)

readStream
.pipe(transformStream)
.pipe(writeStream)
.on('finish', () => { 
    console.log('All text converted to uppercase successfully!');
});
