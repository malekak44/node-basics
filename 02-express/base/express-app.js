const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('../magic-notes')); // all static

app.get('/', (req, res) => {
    res.status(200).send(path.resolve(__dirname, '../magic-notes/index.html'));
});

app.get('*', (req, res) => {
    res.status(404).send('<h2>Page not found</h2>');
});

app.listen(3000, () => {
    console.log('server is running at 3000');
});