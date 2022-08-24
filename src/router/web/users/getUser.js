const User = require('../../../../models/users/User');
const express = require('express');
const router = express.Router();
const createError = require('../../../errors/errorHandle');
//middlewares 
const authenticate = require('../../../../middlewares/authenticateUser');

router.post('/:id', authenticate, async (req, res, next) => {
    if (req.params.id === req.user.id) {
        await User.findById(req.user.id).then((user) => {
            if (!user) {
                res.status(200).send("somthing wrong");
            } else {
                res.status(200).json(user);
            }
        }).catch((err) => {
            next(createError(err.status, err.message));
        })
    } else {
        next(createError(404, "you cant get this account data"));
    }

});

module.exports = router;