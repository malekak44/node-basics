const express = require('express');
const { products } = require('../data');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h2>Home Page</h2>');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h2>About Page</h2>');
});

app.get('/products', (req, res) => {
    res.status(200).json(products);
});

app.get('*', (req, res) => {
    res.status(404).send('<h2>Page not found</h2>');
});

app.listen(3000, () => {
    console.log('server is running at port 3000');
});