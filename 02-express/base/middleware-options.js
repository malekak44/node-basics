const express = require('express');
const morgan = require('morgan');

//  req => middleware => res
const app = express();
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('server is running at port 3000');
});