const Owner = require('../../../models/productsOwners/Owner')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const createError = require('../../errors/errorHandle');
const registerFormSchema = require("../../validation/validateRegisterForm");
const loginFormSchema = require("../../validation/validateLoginForm");
const registerErrors = { message: '' };
const loginErrors = { message: '' };
const methods = {
    ///register
    async createOwner(req, res, next) {
        try {
            const formData = req.body;
            registerFormSchema.validate(formData)
                .catch(err => {
                    res.status(200);
                    registerErrors.message = err.errors;
                    res.redirect('/api/owners/auth/create');
                })
                .then(async (valid) => {
                    if (valid) {
                        registerErrors.message = '';
                        const salt = bcrypt.genSaltSync(10);
                        const hash = bcrypt.hashSync(req.body.password, salt);
                        const newOwner = new Owner({ ...req.body, password: hash });
                        await newOwner.save();
                        res.status(200);
                        console.log('owner added succesfully....');
                        res.redirect('/api/owners/auth/login');
                    }
                });

        } catch (error) {
            next(error);
        }
    },
    ///login
    async signIn(req, res, next) {
        try {
            const formData = req.body;
            const email = req.body.email;
            const password = req.body.password;
            loginFormSchema.validate(formData)
                .catch(err => {
                    res.status(200);
                    loginErrors.message = err.errors;
                    res.redirect('/api/owners/auth/login');
                }).then(async (valid) => {
                    if (valid) {
                        ///search in db
                        await Owner.findOne({ email: email }).then(owner => {
                            if (!owner) {
                                loginErrors.message = 'this email not founded!';
                                res.redirect('/api/owners/auth/login');
                            } else {
                                bcrypt.compare(password, owner.password).then( async (result) => {
                                    if (result) {
                                        req.session.owner = owner;
                                        ///succuss login
                                        const token = await jwt.sign({ id: owner._id }, process.env.JWT_SECRET_KEY_OWNER);
                                        const { password, ...other } = owner._doc;
                                        res.cookie("access_token_owner", token, {
                                            httpOnly: true
                                        }).status(200);
                                        loginErrors.message = '';
                                        res.redirect('/');
                                    } else {
                                        loginErrors.message = 'password incorrect!';
                                        res.redirect('/api/owners/auth/login');
                                    }
                                }).catch((err) => {
                                    loginErrors.message = err.message;
                                    res.redirect('/api/owners/auth/login');
                                })
                            }
                        }).catch(err => {
                            loginErrors.message = err.message;
                            res.redirect('/api/owners/auth/login');
                        })
                    }
                });


        } catch (error) {
            next(error);
        }
    },
    //show register page
    async getregister(req, res, next) {
        try {
            res.render("Register/register.ejs", { errors: registerErrors, owner: req.session.owner });
        } catch (error) {
            next(createError(error.status, error.message));
        }
    },
    //show login page
    async getLogin(req, res, next) {
        try {
            res.render("Login/login.ejs", { errors: loginErrors, owner: req.session.owner });
        } catch (error) {
            next(createError(error.status, error.message));
        }
    }
}

module.exports = { ...methods }