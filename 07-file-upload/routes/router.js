const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    createProduct,
} = require('../controllers/product');
const uploadFile = require('../controllers/uploads');

router.route('/uploads').post(uploadFile);
router.route('/').get(getAllProducts).post(createProduct);

module.exports = router;