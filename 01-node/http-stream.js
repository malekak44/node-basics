const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let stream;

    if (req.url === '/') {
        stream = fs.createReadStream('./static/index.html');
        res.writeHead(200, { 'Content-type': 'text/html' });
        stream.pipe(res);
    } else if (req.url === '/text') {
        stream = fs.createReadStream('./content/demo/dummy.txt');
        res.writeHead(200, { 'Content-type': 'text/plain' });
        stream.pipe(res);
    } else if (req.url === '/image') {
        stream = fs.createReadStream('./static/rose.png');
        res.writeHead(200, { 'Content-type': 'image/png' });
        stream.pipe(res);
    } else if (req.url === '/data') {
        stream = fs.createReadStream('./static/data.json');
        res.writeHead(200, { 'Content-type': 'application/json' });
        stream.pipe(res);
    } else {
        res.end('Page not found.');
        res.writeHead(404, { 'Content-type': 'text/plain' });
    }
}).listen(3000);