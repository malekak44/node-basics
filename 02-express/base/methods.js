const express = require('express');
const { people } = require('../data');
const app = express();

// static assets
app.use(express.static('../public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.post('/', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res
            .status(200)
            .send(`<h1>Welcome ${name}</h1>`);
    }

    res
        .status(401)
        .send('<h1>Please Enter Credentials</h1>');
});

app.get('/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.post('/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({
                success: false,
                msg: 'Please provide name value.'
            });
    }
    return res
        .status(201)
        .json({ success: true, data: { name: name } });
});

app.put('/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
            .status(404)
            .json({
                success: false,
                msg: `No person found with id ${id}`
            });
    }

    const newPeople = people.map(person => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });

    return res
        .status(200)
        .json({
            success: true,
            data: newPeople
        });
});

app.delete('/people/:id', (req, res) => {
    const { id } = req.params;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
            .status(404)
            .json({
                success: false,
                msg: `No person found with id ${id}`
            });
    }

    const newPeople = people.filter((person) => person.id !== Number(id));

    return res
        .status(200)
        .json({
            success: true,
            data: newPeople
        });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000....');
});