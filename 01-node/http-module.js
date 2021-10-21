const http = require('http');
const port = 5500;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Home Page');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('About Page');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});