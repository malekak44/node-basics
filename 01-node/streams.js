const { createReadStream, createWriteStream } = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

// default 64kb
// last buffer - remainder
// highWaterMark - control size

let stream = createReadStream('./content/big.txt');
stream = createReadStream('./content/big.txt', { encoding: 'utf8' });
stream = createReadStream('./content/big.txt', { highWaterMark: 50000 });
const readStream = createReadStream('./content/demo/demo.txt.gz');
const writeStream = createWriteStream('./content/demo/demo.txt');

stream.on('data', (chunk) => {
    console.log(chunk);
});

stream.on('error', (err) => {
    console.log(err)
});

// Pipe Chaining
// readStream.pipe(writeStream);
// readStream.pipe(gzip).pipe(writeStream);
readStream.pipe(gunzip).pipe(writeStream);