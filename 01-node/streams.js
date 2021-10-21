const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size

let stream = createReadStream('./content/big.txt');
stream = createReadStream('./content/big.txt', { encoding: 'utf8' });
stream = createReadStream('./content/big.txt', { highWaterMark: 50000 });

stream.on('data', (chunk) => {
    console.log(chunk);
});

stream.on('error', (err) => console.log(err));