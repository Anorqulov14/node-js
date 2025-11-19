const path = require('path')
const { readFile } = require('fs/promises')

async function createFile() {
    try {
        let data = await readFile('./user.css', 'utf-8')
        console.log(data) 
    } catch (error) {
        console.log('Xato:', error.message)
    }
}

createFile()
