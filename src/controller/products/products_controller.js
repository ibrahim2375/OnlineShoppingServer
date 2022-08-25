const Product = require('../../../models/products/Product')
const createError = require('../../errors/errorHandle');
const session = require('express-session');
const productFormSchema = require('../../validation/validateProductForm')
const productErrors = { message: '' };
const methods = {
    async createProduct(req, res, next) {
        try {

            const formData = req.body;
            productFormSchema.validate(formData)
                .catch(err => {
                    res.status(200);
                    productErrors.message = err.errors;
                    res.redirect('/api/products/create');
                })
                .then(async (valid) => {
                    if (valid) {
                        productErrors.message = '';
                        ///////////////success
                        console.log(req.body);
                        // const newProduct = new Product({ ...req.body, ownerId: req.owner.id });
                        // await newProduct.save().then((result) => {
                        //     if (!result) {
                        //         res.status(200).send('not added succesfully....');
                        //     }
                        //     res.status(200).send('product added succesfully....');
                        // }).catch((err) => {
                        //     next(createError(err.status, err.message));
                        // });
                        //////////////success

                        res.status(200);
                        console.log('product added succesfully....');
                        res.redirect('/');
                    }
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
    },
    async CreateProductPage(req, res, next) {
        try {
            res.render('createProduct/createProduct.ejs', { owner: req.session.owner, errors: productErrors });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { ...methods }