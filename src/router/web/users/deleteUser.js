const User = require('../../../../models/users/User');
const express = require('express');
const router = express.Router();
const createError = require('../../../errors/errorHandle');
//middlewares 
const authenticate = require('../../../../middlewares/authenticate');
router.delete('/:id', authenticate, async (req, res, next) => {
    if (req.params.id === req.user.id) {
        await User.findByIdAndDelete(req.user.id).then((result) => {
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