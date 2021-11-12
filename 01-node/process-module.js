const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello world');
    }
}).listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// process does not require a "require", it's automatically available.

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    });
});

// process.kill(process.pid, 'SIGTERM');
// process.exit(1); // the default integer is 0

// in BASH
// USER_ID=239482 USER_KEY=foobar node app.js;
process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"

// Args
// node app.js name=joe
process.argv.forEach((val, index) => {
    return `${index}: ${val}`;
});

const args = process.argv.slice(2);
//If you have one argument without an index name, like this: you can access it 
args[0];

// node app.js --name=joe
const miniArgs = require('minimist')(process.argv.slice(2));
miniArgs['name']; //joe

// Formatters
// %s format a variable as a string
// %d format a variable as a number
// %o format a variable as an object
// %i format a variable as its integer part only
console.log('%i', 26.67);
console.log('%o', Number);
console.log('My %s has %d ears', 'cat', 2);

console.log('\x1b[33m%s\x1b[0m', 'hi!');
const chalk = require('chalk');
console.log(chalk.yellow('hi!'));