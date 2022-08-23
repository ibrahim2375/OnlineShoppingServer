const User = require('../../../../../models/users/User');
const express = require('express');
const router = express.Router();
const createError = require('../../../../errors/errorHandle');
//middlewares 
const authenticate = require('../../../../../middlewares/authenticate');
router.put('/:id', authenticate, async (req, res, next) => {
    if (req.params.id) {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { favorites: req.params.id }
        }).then((result) => {
                if (!result) {
                    next(createError(404, "somthing wrong"));
                } else {
                    res.status(200).send({ message: "added to favorites  successfully.." });
                }
            }).catch((err) => {
                next(createError(err.status, err.message));
            })
    } else {
        next(createError(404, "you cant addet to your favorites"));
    }

});

module.exports = router;