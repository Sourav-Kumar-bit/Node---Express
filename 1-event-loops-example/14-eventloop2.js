// Started operating system process
console.log('first');
setTimeout(() => {
    console.log('second');
},0)
console.log('third');
// completed and exited operating sysytem process 
// ========================================================
// process stays alive unless
// -> Kill Process Ctrl + C
// -> Unexpected error 
setInterval(() => {
    console.log('Hello World');
},1000)
console.log('I am first');
const { resolveSoa } = require('dns');
// =========================================================
const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event');
    res.end('Hello World')
})

server.listen(5000, ()=> {
    console.log('Server listening on port : 5000....');
})