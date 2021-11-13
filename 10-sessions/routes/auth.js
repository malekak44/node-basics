const express = require('express');
const router = express.Router();
const path = require('path');

const {
    register,
    login,
    logout,
    getUser,
} = require('../controllers/auth');

router
    .route('/register')
    .get((req, res) => {
        res.sendFile(path.resolve(__dirname, '../public/register.html'));
    })
    .post(register);

router
    .route('/login')
    .get((req, res) => {
        res.sendFile(path.resolve(__dirname, '../public/login.html'));
    })
    .post(login);

router
    .route('/dashboard')
    .get((req, res) => {
        res.sendFile(path.resolve(__dirname, '../public/dashboard.html'));
    });

router
    .route('/user')
    .get(getUser);

router.route('/logout').delete(logout);

module.exports = router;