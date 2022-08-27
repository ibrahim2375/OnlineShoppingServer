const User = require('../../../models/users/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('../../errors/errorHandle');
const methods = {
    async createUser(req, res, next) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({ ...req.body, password: hash });
            await newUser.save();
            res.status(200).send('user added succesfully....');
        } catch (error) {
            next(error);
        }
    },
    async signIn(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            // const number = req.body.number;
            await User.findOne({ email: email }).then(user => {
                if (!user) {
                    next(createError(403, 'this email not founded!'));
                } else {
                    bcrypt.compare(password, user.password).then(async (result) => {
                        if (result) {
                            ///succuss login
                            const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY_USER);
                            const { password, ...other } = user._doc;
                            res.cookie("access_token", token).status(200).json(other);
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
    }, async getCurrentUser(req, res, next) {
        try {
            await User.findById(req.user.id).then(user => {
                if (user) res.status(200).json(user);
                // console.log(user);
                else next(createError(200, 'user not founded'));
            }).catch((err) => {
                next(createError(403, err.message));
            })
        } catch (error) {
            next(error);
        }
    }
    ,
    async logOut(req, res, next) {
        try {
            await res.clearCookie('access_token');
            res.status(200).json({ message: 'logout successfully' });

        } catch (error) {
            next(createError(403, err.message));
        }
    }
}

module.exports = { ...methods }