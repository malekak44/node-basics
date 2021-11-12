const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    createProduct,
} = require('../controllers/product');
const uploadFile = require('../controllers/upload');

router.route('/upload').post(uploadFile);
router.route('/').get(getAllProducts).post(createProduct);

module.exports = router;