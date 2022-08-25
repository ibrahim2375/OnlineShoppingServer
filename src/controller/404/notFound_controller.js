const createError = require('../../errors/errorHandle');
const methods = {
    async notFound(req, res, next) {
        try {
            res.render("404/notFound.ejs");
        } catch (error) {
            next(createError(error.status, error.message));
        }
    }
}
module.exports = { ...methods }