const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second', 'utf8')
        await writeFilePromise('./content/result-mind-grenade.txt',
         `This is Awsome : ${first}, ${second}`,
         { flag: 'a' })
        
        console.log(first);
    }
    catch (error) {
        console.log(error);
    }
}

// =======OR================

/* const getText = (path) => {
    return new promises((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
} 

const start = async () => {
    try {
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second')
        console.log(first);
    }
    catch (error) {
        console.log(error);
    }
} */