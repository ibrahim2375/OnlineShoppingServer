const express = require('express');
const router = express.Router();
//middlewares 
const authenticateOwner = require('../../../../middlewares/authenticateOwner');
const products_controller = require('../../../controller/products/products_controller');
router.post('/', authenticateOwner, products_controller.createProduct);
module.exports = router;