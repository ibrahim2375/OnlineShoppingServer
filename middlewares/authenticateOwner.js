const jwt = require('jsonwebtoken');
const createError = require('../src/errors/errorHandle')
const session = require('express-session')
const authenticateOwner = (req, res, next) => {
    try {
        if (req.session.owner) {

            // const token = req.headers.authorization.split(' ')[1];
            const token = req.cookies.access_token_owner;
            // if (!token) return next(createError(404, "authentication faild"));
            if (!token) return res.redirect('/');
            jwt.verify(token, process.env.JWT_SECRET_KEY_OWNER, (err, owner) => {
                if (err) return next(createError(403, "this not vaild token"));
                req.owner = owner;
                next();
            });
        } else {
            res.redirect('/');
        }

    } catch (err) {
        next(createError(err.status, err.message));
    }
}
module.exports = authenticateOwner;