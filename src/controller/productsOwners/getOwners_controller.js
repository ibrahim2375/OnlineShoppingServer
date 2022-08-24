const Owner = require('../../../models/productsOwners/Owner')
const createError = require('../../errors/errorHandle');
const methods = {
    async getOwners(req, res, next) {
        try {
            const owners = await Owner.find();
            if (!owners) {
                return res.status(200).send('there is no owners');
            } else {
                return res.status(200).send(owners);
            }
        } catch (error) {
            next(createError(error.status, error.message));
        }
    }
}

module.exports = { ...methods }