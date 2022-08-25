const Owner = require('../../../../models/productsOwners/Owner');
const express = require('express');
const router = express.Router();
const createError = require('../../../errors/errorHandle');
//middlewares 
const authenticateOwner = require('../../../../middlewares/authenticateOwner');

router.post('/:id', authenticateOwner , async (req, res, next) => {
    if (req.params.id === req.owner.id) {
        await Owner.findById(req.owner.id).then((owner) => {
            if (!owner) {
                res.status(200).send("somthing wrong");
            } else {
                res.status(200).json(owner);
            }
        }).catch((err) => {
            next(createError(err.status, err.message));
        })
    } else {
        next(createError(404, "you cant get this account data"));
    }

});
router.get('/:id', authenticateOwner, async (req, res, next) => {
   
        // await Owner.findById(req.owner.id).then((owner) => {
        //     if (!owner) {
        //         res.status(200).send("somthing wrong");
        //     } else {
        //         res.status(200).json(owner);
        //     }
        // }).catch((err) => {
        //     next(createError(err.status, err.message));
        // })
    res.render('Profile/profile', { owner: req.session.owner });
});

module.exports = router;