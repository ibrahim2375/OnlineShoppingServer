const createError = require('../../errors/errorHandle');
const session = require('express-session');
const methods = {
    async profile(req, res, next) {
        try {
            res.render('Profile/profile', { owner: req.session.owner })
        } catch (error) {
            next(createError(error.status, error.message));
        }
    }
}

module.exports = { ...methods }