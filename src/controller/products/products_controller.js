const Product = require('../../../models/products/Product')
const createError = require('../../errors/errorHandle');
const methods = {
    async createProduct(req, res, next) {
        console.log(req.owner);
        try {
            const newProduct = new Product({ ...req.body, ownerId: req.owner.id });
            await newProduct.save().then((result) => {
                if (!result) {
                    res.status(200).send('not added succesfully....');
                }
                res.status(200).send('product added succesfully....');
            }).catch((err) => {
                next(createError(err.status, err.message));
            });
        } catch (error) {
            next(error);
        }
    },
    async getProducts(req, res, next) {
        try {
            await Product.find().then((products) => {
                res.status(200).json(products);
            }).catch((err) => {
                next(createError(err.status, err.message));
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { ...methods }