
const methods = {
    async getProducts(req, res) {
        try {
            res.send('hello from controller');

        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }