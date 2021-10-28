require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const router = require('./routes/router');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
});

// middleware
app.use(express.json());
app.use('/api/v1/products', router);
app.use(express.static('./public'));
app.use(fileUpload({ useTempFiles: true }));
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