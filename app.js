// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server is running at http://${hostname}:${port}`);
// });


const vars = require('./vars');

console.log(vars.sum(10, 16));
console.log(vars.PI);

const stephen = new vars.coder("Steve Jobs");
console.log(stephen.invoke());

//event module

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('coding', () => {
    console.log('Coding event has occured.');
});

myEmitter.on('addition', (num1, num2) => {
    console.log(num1 + num2);
});

myEmitter.emit('coding');
myEmitter.emit('addition', 2, 4);


class Human extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

const jack = new Human('Captain Jack Sparrow');
jack.on('call', () => {
    console.log('His name is ' + jack.name);
});

jack.emit('call');

// readline module
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.close();


const a = Math.floor(Math.random() * 10) + 1;
const b = Math.floor(Math.random() * 10) + 1;
const result = a + b;

// rl.question(`What is ${a} + ${b}? \n`, (answer) => {
//     if (answer == result) {
//         rl.close();
//     } else {
//         rl.setPrompt('Incorrect! \n');
//         rl.prompt();
//         rl.on('line', (answer) => {
//             if (answer == result) {
//                 rl.close();
//             } else {
//                 rl.setPrompt('Think again! \n');
//                 rl.prompt();
//             }
//         });
//     }
// });

// rl.on('close', () => {
//     console.log('Correct!');
// });

// const fs = require('fs');
// fs.writeFile('tae.txt', 'Kim Taehyung is a singer.', (err) => {
//     if (err) {
//         console.log('error occured.')
//     } else {
//         console.log('file created successfully!');
//         fs.readFile('tae.txt', 'utf8', (err, file) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         });
//     }
// });

// fs.rename('tae.txt', 'kim.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('file renamed!');
//     }
// });

// fs.appendFile('kim.txt', ' He loves clothes and fashion.', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('appended!');
//     }
// });

// fs.unlink('kim.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('deleted!');
//     }
// });

// fs.mkdir('notes', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile('./notes/katta.txt', 'Katta loves donuts!', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('file created!');
//             }
//         });
//         console.log('folder created!');
//     }
// })

// fs.unlink("./notes/katta.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('file deleted!');
//     }
// })

// fs.rmdir('notes', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('folder deleted!');
//     }
// })

// fs.readdir('notes', 'utf8', (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(files);
//         for (const file of files) {
//             console.log(file);
//         }
//     }
// });

// const readStream = fs.createReadStream('./notes/katta.txt', 'utf8');
// const readStream = fs.createReadStream('./notes/tae.txt.gz');
// const writeStream = fs.createWriteStream('./notes/tae.txt');

// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     writeStream.write(chunk);
// });

// Pipe Chaining

// readStream.pipe(writeStream);

// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const gunzip = zlib.createGunzip();

// readStream.pipe(gunzip).pipe(writeStream);



// Reading static file

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
// const readStream = fs.createReadStream('./static/index.html');
// res.writeHead(200, { 'Content-type': 'text/html' });

// const readStream = fs.createReadStream('./static/data.json');
// res.writeHead(200, { 'Content-type': 'application/json' }); 

//     const readStream = fs.createReadStream('./static/rose.png');
//     res.writeHead(200, { 'Content-type': 'image/png' });

//     readStream.pipe(res);
// }).listen(3000);


// Lodash
// const _ = require('lodash');
// let array = _.fill([1, 2, 3, 4, 5], "mango", 1, 4);
// console.log(array)

// Express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Hello World!');
    // res.sendFile(path.join(__dirname, 'static', 'index.html'));
    res.render('index')
});

app.get('/:userQuery', (req, res) => {
    res.render('index', { data: { userQuery: req.params.userQuery } });
});

// app.get('/coder/:name', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send('Your name is ' + req.params.name);
// });

app.post('/', (req, res) => {
    console.log(req.body);
    // res.send("Submitted");
    // res.json({success: true});
    const schema = joi.object().keys({
        email: joi.string().trim().email().required(),
        password: joi.string().min(5).max(10).required()
    });

    joi.validate(req.body, schema, (err, result) => {
        if (err) {
            res.send("Error Occured");
        } else {
            console.log(result);
            res.send("Submitted");
        }
    });
});


app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.listen(3000);