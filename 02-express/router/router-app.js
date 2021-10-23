const express = require('express');
const app = express();

const auth = require('./router-auth');
const people = require('./router-people');

// static assets
app.use(express.static('../public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use('/', auth);
app.use('/people', people);

app.listen(3000, () => {
    console.log('Server is listening on port 3000....');
});