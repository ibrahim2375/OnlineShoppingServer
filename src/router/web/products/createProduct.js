const express = require('express');
const router = express.Router();
//middlewares 
const authenticate = require('../../../../middlewares/authenticate');
const products_controller = require('../../../controller/products/products_controller');
router.post('/', authenticate, products_controller.createProduct);
module.exports = router;