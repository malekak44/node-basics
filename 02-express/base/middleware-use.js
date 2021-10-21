const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');

//  req => middleware => res
const app = express();
app.use([logger, authorize]);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('server is listening at port 3000');
});