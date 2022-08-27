const Product = require('../../../models/products/Product')
const createError = require('../../errors/errorHandle');
const methods = {
    async ownerProduct(req, res, next) {
        try {
            await Product.find({ ownerId: req.owner.id }).then((result) => {
                if (!result) {
                    res.render('ownerProducts/ownerProducts.ejs', { owner: req.session.owner, products: [] });
                }
                 res.render('ownerProducts/ownerProducts.ejs', { owner: req.session.owner, products: result });
            }).catch((err) => {
                next(createError(err.status, err.message));
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { ...methods }