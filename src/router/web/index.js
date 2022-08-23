const router = require('express').Router();
router.use('/api/products', require('./products'));
module.exports = router