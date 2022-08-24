const Owner = require('../../../../models/productsOwners/Owner');
const express = require('express');
const router = express.Router();
const createError = require('../../../errors/errorHandle');
//middlewares 
const authenticateOwner = require('../../../../middlewares/authenticateOwner');
router.delete('/:id', authenticateOwner , async (req, res, next) => {
    if (req.params.id === req.owner.id) {
        await Owner.findByIdAndDelete(req.owner.id).then((result) => {
            if (!result) {
                next(createError(404, "somthing wrong"));
            } else {
                res.status(200).send({ message: "deleted successfully.." });
            }
        }).catch((err) => {
            next(createError(err.status, err.message));
        })
    } else {
        next(createError(404, "you cant delete this account"));
    }

});

module.exports = router;