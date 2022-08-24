const Product = require('../../../../models/products/Product');
const express = require('express');
const router = express.Router();
const createError = require('../../../errors/errorHandle');
//middlewares 
const authenticateOwner = require('../../../../middlewares/authenticateOwner');
router.put('/:id', authenticateOwner ,async (req, res, next) => {
    if (req.params.id) {
        await Product.findByIdAndUpdate(req.params.id, {
            $set: { ...req.body }
        }).then((result) => {
            if (!result) {
                next(createError(404, "somthing wrong"));
            } else {
                res.status(200).send({ message: "product updated successfully.." });
            }
        }).catch((err) => {
            next(createError(err.status, err.message));
        })
    } else {
        next(createError(404, "you cant update this product"));
    }
});
module.exports = router;