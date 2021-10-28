const util = require('util');
const Product = require('../models/product');
const { StatusCodes } = require('http-status-codes');
const cloudinary = require('cloudinary').v2;
const Formidable = require('formidable');

const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(StatusCodes.OK).json({ products });
}

const createProduct = async (req, res) => {
    const { name, price } = req.body;
    const form = new Formidable();
    let image;

    form.parse(req, (err, fields, files) => {
        cloudinary.uploader.upload(files.upload.path, result => {

            console.log(result)
            if (result.public_id) {
                res.end(util.inspect({ fields: fields, files: files }));
            }
            image = result.secure_url || 'fldjfl';
        }
        );
    });

    const product = await Product.create({ name, price, image });
    res.status(StatusCodes.CREATED).json({ product });
}

module.exports = {
    getAllProducts,
    createProduct,
}