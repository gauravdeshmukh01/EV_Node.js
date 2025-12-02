const { rename } = require('fs')
const fs = require('fs/promises')

async function renameDelete() {
    try {
        await fs.rename('hello.txt', 'new4.txt')
        console.log('File renamed')

        await fs.unlink('newfile1.txt')
        console.log('file deleted')
    } catch (err) {
        console.error(err)
    }
}

renameDelete();

// ********************************************************* //

