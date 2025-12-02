// synchronous way and unsynchronous way (promises based) for all below examples


// const fs = require('fs')
// const dir = './test'
// try{
//     if(fs.existsSync(dir)){
//         console.log('Directory exists')
//     }
//     else{
//         console.log('Directory deos not exist')
//     }
// }catch(err){
//     console.error(err)
// }

// ****************************************************************** //

// fs   fs.promises 

// const fs = require('fs')
// const fsp = require('fs').promises;

// const dir = './test'

// (async ()=>{
//     try{
//         await fsp.access(dir, fs.constants.F_OK);
//         console.log("exists")
//     }catch(err){
//         console.log('doesnt exist')
//     }
// })();

// ****************************************************************** //

// directory creation

// const fs= require('fs')
// //const fsp=require('fs').promises;

// const dir='./a'
// try{
//     fs.mkdirSync(dir);
//     console.log('directory created')
// }catch(err){
//     if(err.code=="EEXIST")
//         console.log('already exists')
//     else
//         console.log('error creating directory')
// }

// ****************************************************************** //

// nested directories creation

// const fs= require('fs')

// try{
//     fs.mkdirSync('./b/c/d', {recursive:true});
//     console.log('nested directories created')
// }catch(err){
//     console.log('error creating directory')
// }

// ****************************************************************** //

// const fs = require('fs')
// const fsp = require('fs').promises;

// (async ()=>{
//     try{
//         await fsp.mkdir('./a1/b1/c1',{recursive:true});
//         console.log('created')
//     }catch(err){
//         console.log('doesnt create')
//     }
// })();

// ****************************************************************** //

// const fs = require('fs')
// const dir = './a'

// try{
//     const items = fs.readdirSync(dir, {withFileTypes:true});

//     for(const entry of items){
//         if(entry.isDirectory()) console.log('[DIR]', entry.name);
//         else if(entry.isFile()) console.log('[FILE]', entry.name);
//         else(console.log('[other]'))
//     }
// }catch(err){
//     console.log(err)
// }

// ****************************************************************** //

// const fs = require('fs');
// const fsp = require('fs').promises;
// const dir = './a';

// (async()=>{
//     try{
//         const items = await fsp.readdir(dir, {withFileTypes:true});

//         for(const entry of items){
//             if(entry.isDirectory()) console.log('[DIR]', entry.name); 
//             else if(entry.isFile()) console.log('[FILE]', entry.name); 
//             else console.log('[other]'); 
//         }
//     }catch(err){
//         console.log(err);
//     }
// })();

// ****************************************************************** //

// const fs = require('fs')
// //const fsp=require('fs').promises;
// const dir = './a'

// try{
//     const stats = fs.statSync(dir)
//     console.log(
//         'isFile:', stats.isFile(),
//         'isDIR:', stats.isDirectory(),
//         'size:', stats.size
//     );
// }catch(err){
//     console.log('err')
// }

// ****************************************************************** //

// const fs= require('fs')
// const fsp=require('fs').promises;
// const dir='./a';
// (async ()=>{
//     try{
//     const stats=await fsp.stat(dir)
//     console.log(
//         'isFile:', stats.isFile(),
//         'isDIR:', stats.isDirectory(),
//         'size: ',stats.size
//     );
// }catch(err){
//     console.log('err')
// }

// })();

// ****************************************************************** //

// const fs= require('fs')
// const dir='./test'

//     try{
//         fs.rmdirSync(dir)
//         console.log('removed')
    
    
// }catch(err){
//     console.log('cant remove :',err)
// }

// ****************************************************************** //

// const fs= require('fs')
// const dir='./a'

//     try{
//         fs.rmSync(dir,{recursive:true,force:true})
//         console.log('removed')
    
    
// }catch(err){
//     console.log('cant remove :',err)
// }

// ****************************************************************** //

// const fs= require('fs')
// const fsp=require('fs').promises;
// const dir='./a1';
// (async() =>{
// try{
//         await fsp.rm(dir,{recursive:true,force:true})
//         console.log('removed')
    
    
// }catch(err){
//     console.log('cant remove :',err)
// }

// })();

// ****************************************************************** //

// const fs= require('fs')
// //const fsp=require('fs').promises;
// const source='./a'
// const dest='./d'

// try{
//         fs.cpSync(source,dest,{recursive:true})
//         console.log('copied')
    
    
// }catch(err){
//     console.log('cant copy :',err)
// }

// ****************************************************************** //

// const fs= require('fs')
// const fsp=require('fs').promises;
// const source='./newA';
// const dest='./desti1';
// (async()=>{
//     // try{
//     //     fs.cp(source,dest,{recurisve:true})
//     //     console.log('copied')
    
//     try{
//         // 🎯 FIX 2: Use fs.cpSync (Synchronous version)
//         fs.cpSync(source, dest, {recursive: true}); 
//         console.log('copied');
    
// }catch(err){
//     console.log('cant copy :',err)
// }


// })();

// ****************************************************************** //

// const fs = require('fs')
// const fsp = require('fs').promises;

// (async()=>{
//     try{
//         await fsp.rename('./a', './newA')
//         console.log('renamed')
//     }catch(err){
//         console.log('cant copy :',err)
//     }
// })();

// ****************************************************************** //

// assignment 

const fs = require('fs').promises; 
const path = require('path');

const targetDir = path.join(__dirname, 'assignment');

async function organizeAssignmentFiles() {
    console.log(`Starting file organization in: ${targetDir}`);
    
    try {
        const items = await fs.readdir(targetDir);

        for (const item of items) {
            const fullPath = path.join(targetDir, item);
            let stats;
            
            try {
                stats = await fs.stat(fullPath);
            } catch (statErr) {
                continue; 
            }

            if (stats.isDirectory()) {
                continue;
            }

            const ext = path.extname(item).toLowerCase();

            if (!ext) {
                console.log(`Skipping item with no extension: ${item}`);
                continue;
            }

            const extFolderName = ext.slice(1); 
            const destDir = path.join(targetDir, extFolderName);
            const destPath = path.join(destDir, item);

            await fs.mkdir(destDir, { recursive: true });
            
            await fs.rename(fullPath, destPath);
            console.log(`Moved: ${item} -> ${extFolderName}/`);
        }

        console.log('\nFile organization complete!');

    } catch (err) {
        console.error(`\nAn error occurred during file organization:`, err);
    }
}

organizeAssignmentFiles();
