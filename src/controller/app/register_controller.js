const createError = require('../../errors/errorHandle');
const methods = {
    async register(req, res, next) {
        try {
            res.render("Register/register.ejs");
        } catch (error) {
            next(createError(error.status, error.message));
        }
    }
}

module.exports = { ...methods }