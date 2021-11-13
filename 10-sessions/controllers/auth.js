const bcrypt = require('bcryptjs');
const Errors = require('../errors');
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    let { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new Errors.BadRequestError('Please provide all values');
    }
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password });
    req.session.user = user;
    res.status(StatusCodes.CREATED).json({ user });
}

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Errors.BadRequestError('Please provide all values');
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Errors.NotFoundError('User does not exist');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new Errors.BadRequestError('Password is not correct');
    }

    req.session.user = user;
    res.status(StatusCodes.OK).json({ user });
}

const logout = async (req, res) => {
    console.log(req.sessionID);
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        }
        res.clearCookie('user_id');
        res.redirect('/login');
    });
}

const getUser = async (req, res) => {
    const user = req.session.user;

    res.status(StatusCodes.OK).json({ user });
}

module.exports = {
    register,
    login,
    logout,
    getUser,
}