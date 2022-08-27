const jwt = require('jsonwebtoken');
const createError = require('../src/errors/errorHandle')
const authenticateUser = (req, res, next) => {
    try {

        // const token = req.headers.authorization.split(' ')[1];
        const token = req.cookies.access_token;
        if (!token) return next(createError(200, "authentication faild"));
        jwt.verify(token, process.env.JWT_SECRET_KEY_USER, (err, user) => {
            if (err) return next(createError(403, "this not vaild token"));
            req.user = user;
            next();
        });

    } catch (err) {
        next(createError(err.status, err.message));
    }
}
module.exports = authenticateUser;