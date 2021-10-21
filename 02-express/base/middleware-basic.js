const express = require('express');
const authorize = require('./authorize');
const app = express();

//  req => middleware => res

const logger = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    const time = new Date().getFullYear();
    console.log(url, method, time);
    next();
}

app.get('/', [authorize, logger], (req, res) => {
    res.send('Home Page');
});

app.get('/about', logger, (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('server is listening at port 3000');
});