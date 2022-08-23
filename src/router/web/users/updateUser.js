const User = require('../../../../models/users/User');
const express = require('express');
const router = express.Router();
const createError = require('../../../errors/errorHandle');
//middlewares 
const authenticate = require('../../../../middlewares/authenticate');
// const updateUser_controller = require('../../../controller/users/updateUser.controller');
router.put('/:id', authenticate, async (req, res, next) => {
    if (req.params.id === req.user.id) {
        await User.findByIdAndUpdate(req.user.id, {
            $set: req.body
        }).then((result) => {
            if (!result) {
                res.status(200).send("somthing wrong");
            } else {
                res.status(200).send({message: "updated successfully.."});
            }
        }).catch((err) => {
            next(createError(err.status, err.message));
        })
    } else {
        next(createError(404, "you cant update this account"));
    }

});

module.exports = router;