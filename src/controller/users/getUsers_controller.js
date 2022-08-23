const User = require('../../../models/users/User')
const createError = require('../../errors/errorHandle');
const methods = {
    async getUsers(req, res, next) {
        try {
            const users = await User.find();
            if (!users) {
                return res.status(200).send('there is no users');
            } else {
                return res.status(200).send(users);
            }
        } catch (error) {
            next(createError(error.status, error.message));
        }
    }
}

module.exports = { ...methods }