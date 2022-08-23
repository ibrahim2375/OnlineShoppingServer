const express = require('express');
const router = express.Router();
const products_controller = require('../../controller/products_controller');
router.get('/', products_controller.getProducts);
module.exports = router;