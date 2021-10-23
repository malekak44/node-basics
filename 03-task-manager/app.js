const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();