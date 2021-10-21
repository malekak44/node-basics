const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('../magic-notes/index.html');
const homeStyles = readFileSync('../magic-notes/style.css');
const homeLogic = readFileSync('../magic-notes/app.js');
const favicon = readFileSync('../magic-notes/images/favicon.png');
const togglerIcon = readFileSync('../magic-notes/images/toggler-icon.svg');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(homePage);
        res.end();
    } else if (url === '/style.css') {
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.write(homeStyles);
        res.end();
    } else if (url === '/app.js') {
        res.writeHead(200, { 'Content-type': 'text/javascript' });
        res.write(homeLogic);
        res.end();
    } else if (url === '/images/favicon.png') {
        res.writeHead(200, { 'Content-type': 'image/png' });
        res.write(favicon);
        res.end();
    } else if (url === '/images/toggler-icon.svg') {
        res.writeHead(200, { 'Content-type': 'image/svg+xml' });
        res.write(togglerIcon);
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(3000);