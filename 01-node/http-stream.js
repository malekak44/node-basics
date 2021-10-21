const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const stream = fs.createReadStream('./content/big.txt', 'utf8');
    stream.on('open', () => {
        stream.pipe(res);
    });
    stream.on('error', (err) => console.log(err));
}).listen(3000);