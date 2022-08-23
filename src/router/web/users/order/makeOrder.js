const Order = require('../../../../../models/users/Order');
const express = require('express');
const router = express.Router();
//errors
const createError = require('../../../../errors/errorHandle');
//middlewares 
const authenticate = require('../../../../../middlewares/authenticate');

router.post('/:id', authenticate, async (req, res, next) => {
    if (req.params.id) {
        //make order
        const newOrder = new Order({ ...req.body, userId: req.user.id, productId: req.params.id });
        await newOrder.save().then((result) => {
            if (!result) {
                res.status(200).send('not added succesfully....');
            }
            res.status(200).send('order added succesfully....');
        }).catch((err) => {
            next(createError(err.status, err.message));
        });
    } else {
        next(createError(403, 'Invalid product id'));
    }
});

module.exports = router;