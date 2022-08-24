const Owner = require('../../../../models/productsOwners/Owner');
const express = require('express');
const router = express.Router();
const createError = require('../../../errors/errorHandle');
//middlewares 
const authenticateOwner = require('../../../../middlewares/authenticateOwner');

router.put('/:id', authenticateOwner , async (req, res, next) => {
    if (req.params.id === req.owner.id) {
        await Owner.findByIdAndUpdate(req.owner.id, {
            $set: req.body
        }).then((result) => {
            if (!result) {
                res.status(200).send("somthing wrong");
            } else {
                res.status(200).send({ message: "updated successfully.." });
            }
        }).catch((err) => {
            next(createError(err.status, err.message));
        })
    } else {
        next(createError(404, "you cant update this account"));
    }

});

module.exports = router;