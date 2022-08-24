const Product = require('../../../models/products/Product')
const createError = require('../../errors/errorHandle');
const methods = {
    async ownerProduct(req, res, next) {
        try {
            await Product.find({ ownerId: req.owner.id }).then((result) => {
                if (!result) {
                    res.status(200).send('not products');
                }
                res.status(200).send(result);
            }).catch((err) => {
                next(createError(err.status, err.message));
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { ...methods }