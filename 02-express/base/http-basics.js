const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('<h2>Home Page</h2>');
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write('<h2>About Page</h2>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.write('<h2>Page Not Found</h2>');
        res.end();
    }

    console.log(method);
});

server.listen(3000);