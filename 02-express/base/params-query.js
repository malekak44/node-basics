const express = require('express');
const { products } = require('../data');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h2>Home Page</h2>');
});

app.get('/products', (req, res) => {
    const { search, limit } = req.query;

    if (search) {
        const newProducts = products.filter(product => product.name.startsWith(search));
        return res.status(200).json(newProducts);
    }

    if (limit) {
        const newProducts = products.slice(0, Number(limit));
        return res.status(200).json(newProducts);
    }

    return res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;

    const singleProduct = products.find(product => product.id === Number(id));

    if (!singleProduct) {
        return res.status(404).send('<h2>No product found</h2>');
    }

    return res.status(200).json(singleProduct);
});

app.get('*', (req, res) => {
    res.status(404).send('<h2>Page not found</h2>');
});

app.listen(3000, () => {
    console.log('server is running at port 3000');
});