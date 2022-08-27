const Order = require('../../../../../models/users/Order');
const express = require('express');
const router = express.Router();
//errors
const createError = require('../../../../errors/errorHandle');
//middlewares 
const authenticate = require('../../../../../middlewares/authenticateUser');

router.post('/', authenticate, async (req, res, next) => {
    //make order
    await Order.findByIdAndDelete(req.body.id)
        .then((result) => {
            if (!result) {
                res.status(200).send('not deleted succesfully....');
            }
            res.status(200).send('order deleted succesfully....');
        }).catch((err) => {
            next(createError(err.status, err.message));
        });

});

module.exports = router;