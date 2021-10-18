// GLOBALS - NO WINDOW, NO DOM;
// module - info about current module (File); CommonJS every file is a module, Encapsulated Code(only share minimum)
// require - function to use modules (CommonJS);
// process - info about env where the program is being executed;
// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {

// }, interval);
// setTimeout(() => {

// }, timeout);

// Modules

// const names = require('./names');

// require('./funcs');

// Build in modules

const os = require('os');

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
`The system uptime is ${os.uptime} seconds.`;

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}


const path = require('path');

const seperator = path.sep;
const filePath = path.join('/content/', 'subcontent', 'john.txt');
const basename = path.basename(filePath);
const absolute = path.resolve(__dirname, 'content', 'subcontent', 'john.txt');

// fs module
const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');

const firstFile = readFileSync('./content/first.txt', 'utf8');
const secondFile = readFileSync('./content/second.txt', 'utf8');

// writeFileSync('./content/hello.txt', `Hello from ${firstFile} and ${secondFile}`);

// For appending to the file

// writeFileSync('./content/hello.txt',
//     `Hey Lovely ${firstFile} and ${secondFile}`,
//     { flag: 'a' });

// Async
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     const first = result;

//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//         const second = result;

//         writeFile('./content/async.txt', `File created asynchoronously ---- \n ${first} \n ${second}`, (err) => {
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             console.log('File created successfully!');
//         });
//     });
// });

// http module

const http = require('http');

const server = http.createServer((req, res) => {
    // res.write("Hello World!");
    // res.end();

    if (req.url === '/') {
        res.end("Our Home page");
    }

    if (req.url === '/about') {
        res.end("<h1 style='color: crimson;'>Our About page</h1>");
    }
});

server.listen(3000);