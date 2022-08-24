const Owner = require('../../../models/productsOwners/Owner')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('../../errors/errorHandle');
const methods = {
    async createOwner(req, res, next) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newOwner = new Owner({ ...req.body, password: hash });
            await newOwner.save();
            res.status(200).send('owner added succesfully....');
        } catch (error) {
            next(error);
        }
    },
    async signIn(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            await Owner.findOne({ email: email }).then(owner => {
                if (!owner) {
                    next(createError(403, 'this email not founded!'));
                } else {
                    bcrypt.compare(password, owner.password).then((result) => {
                        if (result) {
                            ///succuss login
                            const token = jwt.sign({ id: owner._id }, process.env.JWT_SECRET_KEY_OWNER);
                            const { password, ...other } = owner._doc;
                            res.cookie("access_token_owner", token, {
                                httpOnly: true
                            }).status(200).json({ other });
                            // res.send("hi")

                        } else {
                            next(createError(403, 'password incorrect!'));
                        }
                    }).catch((err) => {
                        next(createError(404, err));
                    })
                }
            }).catch(err => {
                next(createError(404, err.message));
            })


        } catch (error) {
            next(error);
        }
    }
}

module.exports = { ...methods }