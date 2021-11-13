require('dotenv').config();
require('express-async-errors');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/connect');
const authRouter = require('./routes/auth');
const authMiddleware = require('./middleware/auth');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

const app = express();
const oneDay = 1000 * 60 * 60 * 24;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(session({
    key: 'user_id',
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: oneDay,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
    },
}));
app.use(authMiddleware);
app.use('/auth', authRouter);
app.use(errorHandler);
// app.use(notFound);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json(req.session)
})

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