// const fs = require('fs');

// console.log('start'); // Runs first

// // Tries to read the file asynchronously
// fs.readFile('hello.txt', 'utf-8', (err, data) => { 
//     if (err) {
//         console.error('Error reading file:', err); // THIS BLOCK EXECUTED
//         return;
//     }
//     console.log(data);
// });

// console.log('end'); // Runs second, before the file read finishes

// **************************************************** //

// const fs = require('fs')

// fs.writeFile('file.txt', 'this is a sample text',(err)=>{
//     if(err) throw err;

//     console.log('File created and written data successfully!')
// });

// **************************************************** //

// const fs = require('fs')
// console.log('start')
// fs.writeFile('filee.txt', 'this is a another text',(err)=>{
//     if(err) throw err;

//     console.log('File created and written data successfully!')
// });

// console.log('end');

// **************************************************** //

// const fs = require('fs')
// fs.appendFile('file2.txt', 'this is a another text appended',(err)=>{
//     if(err) throw err;
//     console.log('commtent appended successfully')
// });

// **************************************************** //

// const fs = require('fs')
// fs.appendFileSync('file2.txt', 'one more text appended');


// ```
// writeFile WriteFileSync
// appendFile appendFileSync
// open
// fs.open(path,flags , mode, callback)
// ```
// ******************************************** //

// const fs = require('fs');

// // Use 'fd' (File Descriptor) instead of 'file' in the callback argument
// fs.open('file3.txt', 'w', (err, fd) => {
//     if (err) {
//         // Corrected typo from 'errir openign' to 'Error opening'
//         console.log('Error opening file', err);
//         return;
//     }

//     console.log('file created successfully');

//     // Convert string data to a Buffer, which fs.write requires
//     const buffer = Buffer.from('welcome to nodejs');
    
//     // Use fs.write with the file descriptor (fd) from fs.open
//     fs.write(fd, buffer, 0, buffer.length, null, (err, written, buffer) => {
//         if (err) throw err;
//         console.log('Data written');
        
//         // Always close the file descriptor after writing
//         fs.close(fd, (err) => {
//             if (err) throw err;
//             console.log('File closed successfully');
//         });
//     });
// });

// ***************************************************** //


// const fs = require('fs')

// fs.readFile('file.txt', 'utf-8',(err,data)=>{
//     if(err) {
//         console.error('Error reading file ',err)
//         return;
//     }
    
//     console.log(data)
// })

// ***************************************************** //


// const fs = require('fs')
// try{
//     const data=fs.readFileSync('filee1.txt', 'utf-8');
//     console.log(data)
// }catch(err){
//     console.log('error reading file',err)
// }

// ***************************************************** //


// synchronous solution 

// const fs = require('fs');

// // Step 1: Read file content synchronously
// const data = fs.readFileSync('numbers.txt', 'utf8');

// // Step 2: Convert string to array of numbers
// const numbers = data.split(' ').map(Number);

// // Step 3: Separate even and odd numbers
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// const oddNumbers = numbers.filter(num => num % 2 !== 0);

// // Step 4: Write results synchronously
// fs.writeFileSync('even.txt', evenNumbers.join(' '));
// fs.writeFileSync('odd.txt', oddNumbers.join(' '));

// console.log('✅ Files created successfully (Synchronous)');



// asynchronous solution


// const fs = require('fs');

// // Step 1: Read file asynchronously
// fs.readFile('numbers.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }

//   // Step 2: Convert string to numbers
//   const numbers = data.split(' ').map(Number);

//   // Step 3: Separate even and odd numbers
//   const evenNumbers = numbers.filter(num => num % 2 === 0);
//   const oddNumbers = numbers.filter(num => num % 2 !== 0);

//   // Step 4: Write even numbers to even.txt
//   fs.writeFile('even.txt', evenNumbers.join(' '), (err) => {
//     if (err) console.error('Error writing even.txt:', err);
//     else console.log('✅ even.txt created');
//   });

//   // Step 5: Write odd numbers to odd.txt
//   fs.writeFile('odd.txt', oddNumbers.join(' '), (err) => {
//     if (err) console.error('Error writing odd.txt:', err);
//     else console.log('✅ odd.txt created');
//   });
// });

// ***************************************************** //

// const fs = require('fs');
// const data = fs.readFileSync('numbers.txt', 'utf-8');
// const nums = data.split(' ').map(Number);
// const primes = nums.filter(n => {
// if (n < 2) return false;
// for (let i = 2; i <= Math.sqrt(n); i++) {
// if (n % i === 0) return false;
// }
// return true;
// });
// fs.writeFileSync('prime.txt', primes.join(' '));
// console.log('Prime numbers saved to prime.txt');

// ***************************************************** //


// const fs = require('fs');

// const data = fs.readFileSync("fileWithDuplicates.txt", "utf-8");

// let fruits = data.split('\n');

// console.log(fruits);

// let uniqueFruits = [...new Set(fruits)];

// for(let fruit of uniqueFruits){
// fs.appendFileSync('uniqueFruits.txt',fruit);
// }
// console.log(uniqueFruits);

// ***************************************************** //

// try {
//     let data = fs.readFileSync('myfile.txt', 'utf-8');
//     let cleanData = data.trim().split('\n');
//     let myset = new Set(cleanData);
//     let total = "";
//     for(let val of myset){
//         total += val+"\n";
//     }    
//     fs.writeFileSync('uniqueLines.txt', total);
// } catch (error) {
//     console.error(error);
// }

// ***************************************************** //

// try {
// const data = fs.readFileSync('unique.txt', 'utf8');


// const uniqueContent = Array.from(new Set(
// data.split(/\r?\n/).filter(line => line.trim().length > 0)
// )).join('\n') + '\n';

// fs.writeFileSync('unique.txt', uniqueContent, 'utf8');


// } catch (e) {
// console.error('Error processing: ', e.message);
// }


// ***************************************************** //

// const fs = require('fs');

// const sampleContent = `
// cat
// dog
// bird
// CAT
// dog
// Mouse
// Mouse
// fish
// bird
// `;

// try {
//     fs.writeFileSync('input.txt', sampleContent, 'utf-8');
//     const data = fs.readFileSync('input.txt', 'utf-8');
    
//     const lines = data.split(/\r?\n/);
    
//     const uniqueLinesArray = [];
    
//     for (const line of lines) {
//         if (line.trim().length > 0) {
//             if (!uniqueLinesArray.includes(line)) {
//                 uniqueLinesArray.push(line);
//             }
//         }
//     }
    
//     const uniqueContent = uniqueLinesArray.join('\n');

//     fs.writeFileSync('unique.txt', uniqueContent + '\n', 'utf-8');

// } catch (err) {
//     console.error(`An error occurred: ${err.message}`);
// }

// ***************************************************** //

