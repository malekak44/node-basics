const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');
const router = require('./routes/task');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

// middleware
app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/tasks', router);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();