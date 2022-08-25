var session = require('express-session');
const methods = {
    async logOut(req, res) {
        try {
            if (req.session.owner && req.cookies.user_id) {
                await res.clearCookie('user_id');
                await res.clearCookie('access_token_owner');
                res.redirect('/');
            } else {
                res.redirect('/api/owners/auth/login');
            }
        } catch (error) {
            res.error(error.message, error.status);
            // res.redirect('/api/owners/auth/login');

        }
    }
}

module.exports = { ...methods }