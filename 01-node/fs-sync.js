const { readFileSync, writeFileSync } = require('fs');
const demo = readFileSync('./content/demo/demo.txt', 'utf8');

writeFileSync('./content/hello.txt', 'Hello World!');

// For appending to the file
writeFileSync('./content/hello.txt',
    ' Wanna have a coffee?',
    { flag: 'a' });

console.log(demo);